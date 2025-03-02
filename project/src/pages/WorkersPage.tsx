import React, { useEffect, useState } from 'react';
import { Users, Search, Plus, Edit, Trash2 } from 'lucide-react';
import { useWorkerStore } from '../store/workerStore';
import { useProjectStore } from '../store/projectStore';
import { Table, TableHead, TableBody, TableRow, TableCell } from '../components/ui/Table';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import Alert from '../components/ui/Alert';
import Select from '../components/ui/Select';

const WorkersPage: React.FC = () => {
  const { workers, fetchWorkers, addWorker, updateWorker, deleteWorker } = useWorkerStore();
  const { projects, fetchProjects } = useProjectStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [workerToDelete, setWorkerToDelete] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [currentWorker, setCurrentWorker] = useState<Partial<{
    id: string;
    name: string;
    role: string;
    contact: string;
    projectId: string;
  }>>({});
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    role?: string;
    contact?: string;
    projectId?: string;
  }>({});
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchWorkers(),
        fetchProjects()
      ]);
      setIsLoading(false);
    };
    
    loadData();
  }, [fetchWorkers, fetchProjects]);
  
  const filteredWorkers = workers.filter(worker => 
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddClick = () => {
    setCurrentWorker({});
    setFormErrors({});
    setIsModalOpen(true);
  };
  
  const handleEditClick = (worker: typeof workers[0]) => {
    setCurrentWorker(worker);
    setFormErrors({});
    setIsModalOpen(true);
  };
  
  const handleDeleteClick = (id: string) => {
    setWorkerToDelete(id);
    setDeleteError(null);
  };
  
  const confirmDelete = async () => {
    if (!workerToDelete) return;
    
    setIsDeleting(true);
    setDeleteError(null);
    
    try {
      await deleteWorker(workerToDelete);
      setWorkerToDelete(null);
    } catch (error) {
      setDeleteError('Erro ao excluir o trabalhador. Tente novamente.');
    } finally {
      setIsDeleting(false);
    }
  };
  
  const validateForm = () => {
    const errors: typeof formErrors = {};
    
    if (!currentWorker.name?.trim()) {
      errors.name = 'Nome é obrigatório';
    }
    
    if (!currentWorker.role?.trim()) {
      errors.role = 'Função é obrigatória';
    }
    
    if (!currentWorker.contact?.trim()) {
      errors.contact = 'Contato é obrigatório';
    }
    
    if (!currentWorker.projectId) {
      errors.projectId = 'Projeto é obrigatório';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    try {
      if (currentWorker.id) {
        await updateWorker(currentWorker.id, currentWorker);
      } else {
        await addWorker(currentWorker as Omit<typeof workers[0], 'id'>);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving worker:', error);
    }
  };
  
  const getProjectName = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    return project ? project.name : 'Projeto não encontrado';
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Equipe</h1>
        <Button 
          variant="primary"
          onClick={handleAddClick}
          leftIcon={<Plus size={18} />}
        >
          Novo Trabalhador
        </Button>
      </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <Input
            placeholder="Buscar trabalhadores..."
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
        ) : filteredWorkers.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 h-64">
            <Users size={48} className="text-gray-400 mb-4" />
            <h2 className="text-xl font-medium text-gray-700 mb-2">Nenhum trabalhador encontrado</h2>
            <p className="text-gray-500 mb-4">
              {searchTerm ? 'Tente uma busca diferente ou' : 'Comece'} adicionando um novo trabalhador
            </p>
            <Button
              variant="primary"
              onClick={handleAddClick}
              leftIcon={<Plus size={18} />}
            >
              Adicionar Novo Trabalhador
            </Button>
          </div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell isHeader>Nome</TableCell>
                <TableCell isHeader>Função</TableCell>
                <TableCell isHeader>Contato</TableCell>
                <TableCell isHeader>Projeto</TableCell>
                <TableCell isHeader>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredWorkers.map((worker) => (
                <TableRow key={worker.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      {worker.avatar ? (
                        <img 
                          src={worker.avatar} 
                          alt={worker.name} 
                          className="w-8 h-8 rounded-full mr-3"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <span className="text-sm font-medium">{worker.name.charAt(0)}</span>
                        </div>
                      )}
                      {worker.name}
                    </div>
                  </TableCell>
                  <TableCell>{worker.role}</TableCell>
                  <TableCell>{worker.contact}</TableCell>
                  <TableCell>{getProjectName(worker.projectId)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditClick(worker)}
                        leftIcon={<Edit size={16} />}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(worker.id)}
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
      
      {/* Worker Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentWorker.id ? 'Editar Trabalhador' : 'Novo Trabalhador'}
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
              {currentWorker.id ? 'Atualizar' : 'Adicionar'}
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input
            label="Nome"
            value={currentWorker.name || ''}
            onChange={(e) => setCurrentWorker({ ...currentWorker, name: e.target.value })}
            error={formErrors.name}
            fullWidth
          />
          
          <Input
            label="Função"
            value={currentWorker.role || ''}
            onChange={(e) => setCurrentWorker({ ...currentWorker, role: e.target.value })}
            error={formErrors.role}
            fullWidth
          />
          
          <Input
            label="Contato"
            value={currentWorker.contact || ''}
            onChange={(e) => setCurrentWorker({ ...currentWorker, contact: e.target.value })}
            error={formErrors.contact}
            fullWidth
          />
          
          <Select
            label="Projeto"
            value={currentWorker.projectId || ''}
            onChange={(value) => setCurrentWorker({ ...currentWorker, projectId: value })}
            options={projects.map(project => ({ value: project.id, label: project.name }))}
            error={formErrors.projectId}
            fullWidth
          />
        </div>
      </Modal>
      
      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!workerToDelete}
        onClose={() => setWorkerToDelete(null)}
        title="Confirmar exclusão"
        size="sm"
        footer={
          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              onClick={() => setWorkerToDelete(null)}
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
        <p>Tem certeza que deseja excluir este trabalhador? Esta ação não pode ser desfeita.</p>
      </Modal>
    </div>
  );
};

export default WorkersPage;