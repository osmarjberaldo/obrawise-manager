import React, { useEffect, useState } from 'react';
import { Store, Search, Plus, Edit, Trash2, Mail, Phone, MapPin } from 'lucide-react';
import { useSupplierStore } from '../store/supplierStore';
import { Table, TableHead, TableBody, TableRow, TableCell } from '../components/ui/Table';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import Alert from '../components/ui/Alert';
import Badge from '../components/ui/Badge';

const SuppliersPage: React.FC = () => {
  const { suppliers, fetchSuppliers, addSupplier, updateSupplier, deleteSupplier } = useSupplierStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [supplierToDelete, setSupplierToDelete] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [currentSupplier, setCurrentSupplier] = useState<Partial<{
    id: string;
    name: string;
    contact: string;
    email: string;
    address: string;
    materials: string[];
  }>>({});
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    contact?: string;
    email?: string;
    address?: string;
  }>({});
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await fetchSuppliers();
      setIsLoading(false);
    };
    
    loadData();
  }, [fetchSuppliers]);
  
  const filteredSuppliers = suppliers.filter(supplier => 
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.address.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddClick = () => {
    setCurrentSupplier({
      materials: []
    });
    setFormErrors({});
    setIsModalOpen(true);
  };
  
  const handleEditClick = (supplier: typeof suppliers[0]) => {
    setCurrentSupplier(supplier);
    setFormErrors({});
    setIsModalOpen(true);
  };
  
  const handleDeleteClick = (id: string) => {
    setSupplierToDelete(id);
    setDeleteError(null);
  };
  
  const confirmDelete = async () => {
    if (!supplierToDelete) return;
    
    setIsDeleting(true);
    setDeleteError(null);
    
    try {
      await deleteSupplier(supplierToDelete);
      setSupplierToDelete(null);
    } catch (error) {
      setDeleteError('Erro ao excluir o fornecedor. Tente novamente.');
    } finally {
      setIsDeleting(false);
    }
  };
  
  const validateForm = () => {
    const errors: typeof formErrors = {};
    
    if (!currentSupplier.name?.trim()) {
      errors.name = 'Nome é obrigatório';
    }
    
    if (!currentSupplier.contact?.trim()) {
      errors.contact = 'Contato é obrigatório';
    }
    
    if (!currentSupplier.email?.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(currentSupplier.email)) {
      errors.email = 'Email inválido';
    }
    
    if (!currentSupplier.address?.trim()) {
      errors.address = 'Endereço é obrigatório';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    try {
      if (currentSupplier.id) {
        await updateSupplier(currentSupplier.id, currentSupplier);
      } else {
        await addSupplier(currentSupplier as Omit<typeof suppliers[0], 'id'>);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving supplier:', error);
    }
  };
  
  const handleMaterialsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const materialsText = e.target.value;
    const materialsArray = materialsText
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);
    
    setCurrentSupplier({
      ...currentSupplier,
      materials: materialsArray
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Fornecedores</h1>
        <Button 
          variant="primary"
          onClick={handleAddClick}
          leftIcon={<Plus size={18} />}
        >
          Novo Fornecedor
        </Button>
      </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <Input
            placeholder="Buscar fornecedores..."
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
        ) : filteredSuppliers.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 h-64">
            <Store size={48} className="text-gray-400 mb-4" />
            <h2 className="text-xl font-medium text-gray-700 mb-2">Nenhum fornecedor encontrado</h2>
            <p className="text-gray-500 mb-4">
              {searchTerm ? 'Tente uma busca diferente ou' : 'Comece'} adicionando um novo fornecedor
            </p>
            <Button
              variant="primary"
              onClick={handleAddClick}
              leftIcon={<Plus size={18} />}
            >
              Adicionar Novo Fornecedor
            </Button>
          </div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell isHeader>Nome</TableCell>
                <TableCell isHeader>Contato</TableCell>
                <TableCell isHeader>Email</TableCell>
                <TableCell isHeader>Endereço</TableCell>
                <TableCell isHeader>Materiais</TableCell>
                <TableCell isHeader>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSuppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-medium">{supplier.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-gray-500" />
                      {supplier.contact}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Mail size={16} className="mr-2 text-gray-500" />
                      {supplier.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-gray-500" />
                      {supplier.address}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {supplier.materials.map((material, index) => (
                        <Badge key={index} variant="primary">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2"> <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditClick(supplier)}
                        leftIcon={<Edit size={16} />}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(supplier.id)}
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
      
      {/* Supplier Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentSupplier.id ? 'Editar Fornecedor' : 'Novo Fornecedor'}
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
              {currentSupplier.id ? 'Atualizar' : 'Adicionar'}
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input
            label="Nome"
            value={currentSupplier.name || ''}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, name: e.target.value })}
            error={formErrors.name}
            fullWidth
          />
          
          <Input
            label="Contato"
            value={currentSupplier.contact || ''}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, contact: e.target.value })}
            error={formErrors.contact}
            fullWidth
            leftIcon={<Phone size={18} className="text-gray-500" />}
          />
          
          <Input
            label="Email"
            type="email"
            value={currentSupplier.email || ''}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, email: e.target.value })}
            error={formErrors.email}
            fullWidth
            leftIcon={<Mail size={18} className="text-gray-500" />}
          />
          
          <Input
            label="Endereço"
            value={currentSupplier.address || ''}
            onChange={(e) => setCurrentSupplier({ ...currentSupplier, address: e.target.value })}
            error={formErrors.address}
            fullWidth
            leftIcon={<MapPin size={18} className="text-gray-500" />}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Materiais (separados por vírgula)
            </label>
            <textarea
              value={currentSupplier.materials?.join(', ') || ''}
              onChange={handleMaterialsChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
            />
          </div>
        </div>
      </Modal>
      
      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!supplierToDelete}
        onClose={() => setSupplierToDelete(null)}
        title="Confirmar exclusão"
        size="sm"
        footer={
          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              onClick={() => setSupplierToDelete(null)}
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
        <p>Tem certeza que deseja excluir este fornecedor? Esta ação não pode ser desfeita.</p>
      </Modal>
    </div>
  );
};

export default SuppliersPage;