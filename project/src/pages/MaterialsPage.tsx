import React, { useEffect, useState } from 'react';
import { Package, Search, Plus, Edit, Trash2, AlertTriangle } from 'lucide-react';
import { useMaterialStore } from '../store/materialStore';
import { useProjectStore } from '../store/projectStore';
import { Table, TableHead, TableBody, TableRow, TableCell } from '../components/ui/Table';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import Alert from '../components/ui/Alert';
import Select from '../components/ui/Select';
import Badge from '../components/ui/Badge';
import { formatCurrency } from '../utils/formatters';

const MaterialsPage: React.FC = () => {
  const { materials, fetchMaterials, addMaterial, updateMaterial, deleteMaterial } = useMaterialStore();
  const { projects, fetchProjects } = useProjectStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [materialToDelete, setMaterialToDelete] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [currentMaterial, setCurrentMaterial] = useState<Partial<{
    id: string;
    name: string;
    quantity: number;
    unit: string;
    price: number;
    supplier: string;
    projectId: string;
    threshold: number;
  }>>({});
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    quantity?: string;
    unit?: string;
    price?: string;
    supplier?: string;
    projectId?: string;
    threshold?: string;
  }>({});
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchMaterials(),
        fetchProjects()
      ]);
      setIsLoading(false);
    };
    
    loadData();
  }, [fetchMaterials, fetchProjects]);
  
  const filteredMaterials = materials.filter(material => 
    material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddClick = () => {
    setCurrentMaterial({
      quantity: 0,
      price: 0,
      threshold: 0
    });
    setFormErrors({});
    setIsModalOpen(true);
  };
  
  const handleEditClick = (material: typeof materials[0]) => {
    setCurrentMaterial(material);
    setFormErrors({});
    setIsModalOpen(true);
  };
  
  const handleDeleteClick = (id: string) => {
    setMaterialToDelete(id);
    setDeleteError(null);
  };
  
  const confirmDelete = async () => {
    if (!materialToDelete) return;
    
    setIsDeleting(true);
    setDeleteError(null);
    
    try {
      await deleteMaterial(materialToDelete);
      setMaterialToDelete(null);
    } catch (error) {
      setDeleteError('Erro ao excluir o material. Tente novamente.');
    } finally {
      setIsDeleting(false);
    }
  };
  
  const validateForm = () => {
    const errors: typeof formErrors = {};
    
    if (!currentMaterial.name?.trim()) {
      errors.name = 'Nome é obrigatório';
    }
    
    if (currentMaterial.quantity === undefined || currentMaterial.quantity < 0) {
      errors.quantity = 'Quantidade deve ser um número positivo';
    }
    
    if (!currentMaterial.unit?.trim()) {
      errors.unit = 'Unidade é obrigatória';
    }
    
    if (currentMaterial.price === undefined || currentMaterial.price < 0) {
      errors.price = 'Preço deve ser um número positivo';
    }
    
    if (!currentMaterial.supplier?.trim()) {
      errors.supplier = 'Fornecedor é obrigatório';
    }
    
    if (!currentMaterial.projectId) {
      errors.projectId = 'Projeto é obrigatório';
    }
    
    if (currentMaterial.threshold === undefined || currentMaterial.threshold < 0) {
      errors.threshold = 'Limite mínimo deve ser um número positivo';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    try {
      if (currentMaterial.id) {
        await updateMaterial(currentMaterial.id, currentMaterial);
      } else {
        await addMaterial(currentMaterial as Omit<typeof materials[0], 'id'>);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving material:', error);
    }
  };
  
  const getProjectName = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    return project ? project.name : 'Projeto não encontrado';
  };
  
  const isLowStock = (material: typeof materials[0]) => {
    return material.quantity <= material.threshold;
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Materiais</h1>
        <Button 
          variant="primary"
          onClick={handleAddClick}
          leftIcon={<Plus size={18} />}
        >
          Novo Material
        </Button>
      </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <Input
            placeholder="Buscar materiais..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            leftIcon={<Search size={18} className="text-gray-400" />}
            fullWidth
          />
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredMaterials.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 h-64">
            <Package size={48} className="text-gray-400 mb-4" />
            <h2 className="text-xl font-medium text-gray-700 mb-2">Nenhum material encontrado</h2>
            <p className="text-gray-500 mb-4">
              {searchTerm ? 'Tente uma busca diferente ou' : 'Comece'} adicionando um novo material
            </p>
            <Button
              variant="primary"
              onClick={handleAddClick}
              leftIcon={<Plus size={18} />}
            >
              Adicionar Novo Material
            </Button>
          </div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell isHeader>Nome</TableCell>
                <TableCell isHeader>Quantidade</TableCell>
                <TableCell isHeader>Preço</TableCell>
                <TableCell isHeader>Fornecedor</TableCell>
                <TableCell isHeader>Projeto</TableCell>
                <TableCell isHeader>Status</TableCell>
                <TableCell isHeader>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMaterials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.name}</TableCell>
                  <TableCell>
                    {material.quantity} {material.unit}
                  </TableCell>
                  <TableCell>{formatCurrency(material.price)}</TableCell>
                  <TableCell>{material.supplier}</TableCell>
                  <TableCell>{getProjectName(material.projectId)}</TableCell>
                  <TableCell>
                    {isLowStock(material) ? (
                      <Badge variant="danger" className="flex items-center">
                        <AlertTriangle size={12} className="mr-1" />
                        Estoque Baixo
                      </Badge>
                    ) : (
                      <Badge variant="success">Estoque OK</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditClick(material)}
                        leftIcon={<Edit size={16} />}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(material.id)}
                        leftIcon={<Trash2 size={16} />}
                      >
                        Excluir
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      
      {/* Material Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentMaterial.id ? 'Editar Material' : 'Novo Material'}
        footer={
          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmit}
            >
              {currentMaterial.id ? 'Atualizar' : 'Adicionar'}
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input
            label="Nome"
            value={currentMaterial.name || ''}
            onChange={(e) => setCurrentMaterial({ ...currentMaterial, name: e.target.value })}
            error={formErrors.name}
            fullWidth
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Quantidade"
              type="number"
              value={currentMaterial.quantity?.toString() || '0'}
              onChange={(e) => setCurrentMaterial({ ...currentMaterial, quantity: parseFloat(e.target.value) || 0 })}
              error={formErrors.quantity}
              fullWidth
            />
            
            <Input
              label="Unidade"
              value={currentMaterial.unit || ''}
              onChange={(e) => setCurrentMaterial({ ...currentMaterial, unit: e.target.value })}
              error={formErrors.unit}
              fullWidth
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Preço"
              type="number"
              value={currentMaterial.price?.toString() || '0'}
              onChange={(e) => setCurrentMaterial({ ...currentMaterial, price: parseFloat(e.target.value) || 0 })}
              error={formErrors.price}
              fullWidth
            />
            
            <Input
              label="Limite Mínimo"
              type="number"
              value={currentMaterial.threshold?.toString() || '0'}
              onChange={(e) => setCurrentMaterial({ ...currentMaterial, threshold: parseFloat(e.target.value) || 0 })}
              error={formErrors.threshold}
              fullWidth
            />
          </div>
          
          <Input
            label="Fornecedor"
            value={currentMaterial.supplier || ''}
            onChange={(e) => setCurrentMaterial({ ...currentMaterial, supplier: e.target.value })}
            error={formErrors.supplier}
            fullWidth
          />
          
          <Select
            label="Projeto"
            value={currentMaterial.projectId || ''}
            onChange={(value) => setCurrentMaterial({ ...currentMaterial, projectId: value })}
            options={projects.map(project => ({ value: project.id, label: project.name }))}
            error={formErrors.projectId}
            fullWidth
          />
        </div>
      </Modal>
      
      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!materialToDelete}
        onClose={() => setMaterialToDelete(null)}
        title="Confirmar exclusão"
        size="sm"
        footer={
          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              onClick={() => setMaterialToDelete(null)}
            >
              Cancelar
            </Button>
            <Button
              variant="danger"
              onClick={confirmDelete}
              isLoading={isDeleting}
            >
              Excluir
            </Button>
          </div>
        }
      >
        {deleteError && (
          <Alert
            variant="error"
            message={deleteError}
            className="mb-4"
          />
        )}
        <p>Tem certeza que deseja excluir este material? Esta ação não pode ser desfeita.</p>
      </Modal>
    </div>
  );
};

export default MaterialsPage;