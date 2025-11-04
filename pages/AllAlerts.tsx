
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALERTS } from '../constants';
import { Alert, AlertStatus } from '../types';
import StatusBadge from '../components/StatusBadge';

const AllAlerts: React.FC = () => {
  const [filter, setFilter] = useState<AlertStatus | 'All'>('All');
  const navigate = useNavigate();

  const filteredAlerts = useMemo(() => {
    if (filter === 'All') {
      return ALERTS;
    }
    return ALERTS.filter(alert => alert.status === filter);
  }, [filter]);

  const handleRowClick = (alertId: string) => {
    navigate(`/alerts/${alertId}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-brand-dark">All Alerts</h1>
        <div className="flex items-center space-x-2">
          <label htmlFor="status-filter" className="text-sm font-medium text-gray-600">
            Filter by status:
          </label>
          <select
            id="status-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as AlertStatus | 'All')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-2 bg-gray-50"
          >
            <option value="All">All</option>
            <option value={AlertStatus.Critical}>Critical</option>
            <option value={AlertStatus.High}>High</option>
            <option value={AlertStatus.Routine}>Routine</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAlerts.map((alert: Alert) => (
              <tr key={alert.id} onClick={() => handleRowClick(alert.id)} className="hover:bg-gray-100 cursor-pointer transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alert.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <StatusBadge status={alert.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">{alert.riskScore}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAlerts;
