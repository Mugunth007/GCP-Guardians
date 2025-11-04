
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="bg-brand-blue/10 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-brand-dark">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
