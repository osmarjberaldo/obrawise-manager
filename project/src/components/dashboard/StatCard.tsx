import React from 'react';
import { Card, CardBody } from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  className = ''
}) => {
  return (
    <Card className={className}>
      <CardBody>
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
            
            {change && (
              <div className="flex items-center mt-1">
                <span
                  className={`text-sm font-medium ${
                    change.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {change.isPositive ? '+' : ''}{change.value}%
                </span>
                <span className="text-xs text-gray-500 ml-1">desde o mês passado</span>
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default StatCard;