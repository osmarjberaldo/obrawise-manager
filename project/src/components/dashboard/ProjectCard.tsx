import React from 'react';
import { Project } from '../../types';
import { Card, CardBody } from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import Badge from '../ui/Badge';
import { Calendar, MapPin, DollarSign } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'not-started':
        return <Badge variant="secondary">Não iniciado</Badge>;
      case 'in-progress':
        return <Badge variant="primary">Em andamento</Badge>;
      case 'completed':
        return <Badge variant="success">Concluído</Badge>;
      case 'on-hold':
        return <Badge variant="warning">Em espera</Badge>;
    }
  };
  
  const getProgressColor = (progress: number) => {
    if (progress < 30) return 'red';
    if (progress < 70) return 'yellow';
    return 'green';
  };
  
  return (
    <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardBody className="flex flex-col h-full">
        <div className="relative h-40 -mx-6 -mt-4 mb-4 overflow-hidden">
          <img
            src={project.images[0] || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            {getStatusBadge(project.status)}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2" />
            <span className="truncate">{project.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>
              {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign size={16} className="mr-2" />
            <span>
              {formatCurrency(project.spent)} / {formatCurrency(project.budget)}
            </span>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-between text-sm mb-1">
            <span>Progresso</span>
            <span>{project.progress}%</span>
          </div>
          <ProgressBar 
            value={project.progress} 
            color={getProgressColor(project.progress)}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;