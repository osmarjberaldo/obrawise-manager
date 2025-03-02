import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat, DollarSign, Users, Package, TrendingUp } from 'lucide-react';
import { useProjectStore } from '../store/projectStore';
import { useWorkerStore } from '../store/workerStore';
import { useMaterialStore } from '../store/materialStore';
import { useNotificationStore } from '../store/notificationStore';
import StatCard from '../components/dashboard/StatCard';
import ProjectCard from '../components/dashboard/ProjectCard';
import BudgetChart from '../components/dashboard/BudgetChart';
import ProgressChart from '../components/dashboard/ProgressChart';
import MaterialsChart from '../components/dashboard/MaterialsChart';
import Button from '../components/ui/Button';
import { formatCurrency } from '../utils/formatters';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { projects, fetchProjects } = useProjectStore();
  const { workers, fetchWorkers } = useWorkerStore();
  const { materials, fetchMaterials } = useMaterialStore();
  const { addNotification } = useNotificationStore();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchProjects(),
        fetchWorkers(),
        fetchMaterials()
      ]);
      setIsLoading(false);
    };
    
    loadData();
    
    // Check for low material stock
    const checkMaterialStock = () => {
      materials.forEach(material => {
        if (material. quantity <= material.threshold) {
          addNotification({
            title: 'Alerta de Material',
            message: `Estoque de ${material.name} está abaixo do limite mínimo`,
            type: 'warning'
          });
        }
      });
    };
    
    // Check after materials are loaded
    if (materials.length > 0) {
      checkMaterialStock();
    }
  }, [fetchProjects, fetchWorkers, fetchMaterials, materials, addNotification]);
  
  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0);
  const totalSpent = projects.reduce((sum, project) => sum + project.spent, 0);
  
  const budgetChartData = projects.map(project => ({
    name: project.name,
    budget: project.budget,
    spent: project.spent
  }));
  
  const progressChartData = [
    { name: 'Não iniciado', value: projects.filter(p => p.status === 'not-started').length, color: '#9CA3AF' },
    { name: 'Em andamento', value: projects.filter(p => p.status === 'in-progress').length, color: '#3B82F6' },
    { name: 'Concluído', value: projects.filter(p => p.status === 'completed').length, color: '#10B981' },
    { name: 'Em espera', value: projects.filter(p => p.status === 'on-hold').length, color: '#F59E0B' }
  ].filter(item => item.value > 0);
  
  const materialsChartData = materials
    .filter(material => material.projectId === projects[0]?.id)
    .map(material => ({
      name: material.name,
      quantity: material.quantity,
      threshold: material.threshold
    }));
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <Button 
          variant="primary"
          onClick={() => navigate('/projects/new')}
          leftIcon={<HardHat size={18} />}
        >
          Nova Obra
        </Button>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          {projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8 h-64">
              <HardHat size={48} className="text-gray-400 mb-4" />
              <h2 className="text-xl font-medium text-gray-700 mb-4">Nenhuma obra cadastrada</h2>
              <Button
                variant="primary"
                onClick={() => navigate('/projects/new')}
                leftIcon={<HardHat size={18} />}
              >
                Adicionar Nova Obra
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  title="Obras em Andamento"
                  value={projects.filter(p => p.status === 'in-progress').length}
                  icon={<HardHat size={24} />}
                  change={{ value: 10, isPositive: true }}
                />
                <StatCard
                  title="Orçamento Total"
                  value={formatCurrency(totalBudget)}
                  icon={<DollarSign size={24} />}
                  change={{ value: 5, isPositive: true }}
                />
                <StatCard
                  title="Trabalhadores"
                  value={workers.length}
                  icon={<Users size={24} />}
                  change={{ value: 2, isPositive: true }}
                />
                <StatCard
                  title="Materiais"
                  value={materials.length}
                  icon={<Package size={24} />}
                  change={{ value: 3, isPositive: false }}
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <BudgetChart data={budgetChartData} />
                <ProgressChart data={progressChartData} />
              </div>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Obras em Andamento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => navigate(`/projects/${project.id}`)}
                  />
                ))}
              </div>
              
              {materials.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold mt-8 mb-4">Estoque de Materiais</h2>
                  <MaterialsChart data={materialsChartData} />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardPage;