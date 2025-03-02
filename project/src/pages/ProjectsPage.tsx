import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat, Search, Plus, Edit, Trash2 } from 'lucide-react';
import { useProjectStore } from '../store/projectStore';
import { Table, TableHead, TableBody, TableRow, TableCell } from '../components/ui/Table';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import Modal from '../components/ui/Modal';
import Alert from '../components/ui/Alert';
import { formatCurrency } from '../utils/formatters';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { projects, fetchProjects, deleteProject } = useProjectStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await fetchProjects();
      setIsLoading(false);
    };
    
    loadData();
  }, [fetchProjects]);
  
  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'not-started':
        return <Badge variant="secondary">Não iniciado</Badge>;
      case 'in-progress':
        return <Badge variant="primary">Em andamento</Badge>;
      case 'completed':
        return <Badge variant="success">Concluído</Badge>;
      case 'on-hold':
        return <Badge variant="warning">Em espera</Badge>;
      default:
        return null;
    }
  };
  
  const handleDeleteClick = (id: string) => {
    setProjectToDelete(id);
    setDeleteError(null);
  };
  
  const confirmDelete = async () => {
    if (!projectToDelete) return;
    
    setIsDeleting(true);
    setDeleteError(null);
    
    try {
      await deleteProject(projectToDelete);
      setProjectToDelete(null);
    } catch (error) {
      setDeleteError('Erro ao excluir o projeto. Tente novamente.');
    } finally {
      setIsDeleting(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Obras</h1>
        <Button 
          variant="primary"
          onClick={() => navigate('/projects/new')}
          leftIcon={<Plus size={18} />}
        >
          Nova Obra
        </Button>
      </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <Input
            placeholder="Buscar obras..."
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
        ) : filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 h-64">
            <HardHat size={48} className="text-gray-400 mb-4" />
            <h2 className="text-xl font-medium text-gray-700 mb-2">Nenhuma obra encontrada</h2>
            <p className="text-gray-500 mb-4">
              {searchTerm ? 'Tente uma busca diferente ou' : 'Comece'} adicionando uma nova obra
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/projects/new')}
              leftIcon={<Plus size={18} />}
            >
              Adicionar Nova Obra
            </Button>
          </div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell isHeader>Nome</TableCell>
                <TableCell isHeader>Local</TableCell>
                <TableCell isHeader>Cliente</TableCell>
                <TableCell isHeader>Orçamento</TableCell>
                <TableCell isHeader>Progresso</TableCell>
                <TableCell isHeader>Status</TableCell>
                <TableCell isHeader>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.location}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{formatCurrency(project.budget)}</TableCell>
                  <TableCell>{project.progress}%</TableCell>
                  <TableCell>{getStatusBadge(project.status)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/projects/edit/${project.id}`);
                        }}
                        leftIcon={<Edit size={16} />}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteClick(project.id);
                        }}
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
      
      <Modal
        isOpen={!!projectToDelete}
        onClose={() => setProjectToDelete(null)}
        title="Confirmar exclusão"
        size="sm"
        footer={
          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              onClick={() => setProjectToDelete(null)}
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
        <p>Tem certeza que deseja excluir esta obra? Esta ação não pode ser desfeita.</p>
      </Modal>
    </div>
  );
};

export default ProjectsPage;