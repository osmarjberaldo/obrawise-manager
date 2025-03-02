import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardBody } from '../ui/Card';

interface MaterialsChartProps {
  data: {
    name: string;
    quantity: number;
    threshold: number;
  }[];
}

const MaterialsChart: React.FC<MaterialsChartProps> = ({ data }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="text-lg font-medium">Estoque de Materiais</h3>
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
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantity" name="Quantidade" fill="#3B82F6" />
            <Bar dataKey="threshold" name="Limite Mínimo" fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default MaterialsChart;