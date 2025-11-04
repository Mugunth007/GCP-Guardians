
import React from 'react';
import StatCard from '../components/StatCard';
import { ALERTS } from '../constants';
import { AlertStatus } from '../types';
import StatusBadge from '../components/StatusBadge';
import { AlertTriangleIcon } from '../components/icons';

const Dashboard: React.FC = () => {
  const totalCriticalAlerts = ALERTS.filter(alert => alert.status === AlertStatus.Critical).length;
  const newReportsToday = 5; 
  const avgResolutionTime = '6.2 Hrs';
  const modelAccuracy = '94.8%';

  const prioritizedAlerts = ALERTS.filter(
    alert => alert.status === AlertStatus.Critical || alert.status === AlertStatus.High
  ).sort((a, b) => b.riskScore - a.riskScore);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Critical Alerts" value={totalCriticalAlerts} icon={<AlertTriangleIcon className="h-6 w-6 text-status-critical"/>} />
        <StatCard title="New Reports Today" value={newReportsToday} icon={<AlertTriangleIcon className="h-6 w-6 text-brand-blue"/>} />
        <StatCard title="Avg. Resolution Time" value={avgResolutionTime} icon={<AlertTriangleIcon className="h-6 w-6 text-brand-blue"/>} />
        <StatCard title="Model Accuracy" value={modelAccuracy} icon={<AlertTriangleIcon className="h-6 w-6 text-brand-blue"/>} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Prioritized Triage List</h2>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {prioritizedAlerts.map(alert => (
              <div key={alert.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center border border-gray-200 hover:bg-gray-100 transition-colors">
                <div>
                  <h3 className="font-semibold text-brand-dark">{alert.title}</h3>
                  <p className="text-sm text-gray-500">{alert.location}</p>
                </div>
                <div className="text-right">
                  <StatusBadge status={alert.status} />
                  <p className="text-sm text-gray-600 mt-1">Risk: <span className="font-bold">{alert.riskScore}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Live Risk Heatmap</h2>
          <div className="aspect-square bg-gray-100 rounded-lg p-4">
            <div className="grid grid-cols-8 gap-1 h-full">
              {Array.from({ length: 64 }).map((_, i) => {
                const colors = ['bg-red-500', 'bg-red-400', 'bg-orange-400', 'bg-yellow-300', 'bg-green-400', 'bg-green-500'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                return <div key={i} className={`rounded ${color} opacity-75`}></div>
              })}
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">Simulated real-time risk distribution</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
