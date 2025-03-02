import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardBody } from '../ui/Card';

interface BudgetChartProps {
  data: {
    name: string;
    budget: number;
    spent: number;
  }[];
}

const BudgetChart: React.FC<BudgetChartProps> = ({ data }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="text-lg font-medium">Orçamento vs. Gasto</h3>
      </CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, undefined]}
            />
            <Legend />
            <Bar dataKey="budget" name="Orçamento" fill="#3B82F6" />
            <Bar dataKey="spent" name="Gasto" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default BudgetChart;