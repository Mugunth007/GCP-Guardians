
import React from 'react';
import { useParams } from 'react-router-dom';
import { ALERTS } from '../constants';
import StatusBadge from '../components/StatusBadge';
import { BotIcon } from '../components/icons';

const AlertDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const alert = ALERTS.find(a => a.id === id);

  if (!alert) {
    return (
      <div className="text-center p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600">Alert Not Found</h1>
        <p className="text-gray-500 mt-2">The alert with ID "{id}" could not be found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-dark">{alert.title}</h1>
        <p className="text-md text-gray-500 mt-1">{alert.location}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-brand-dark border-b pb-2">Alert Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <div className="mt-1"><StatusBadge status={alert.status} /></div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Risk Score</p>
              <p className="text-lg font-bold text-brand-dark">{alert.riskScore} / 100</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Category</p>
              <p className="text-lg text-gray-800">{alert.category}</p>
            </div>
             <div>
              <p className="text-sm font-medium text-gray-500">ID</p>
              <p className="text-lg text-gray-800 font-mono text-xs">{alert.id}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
           <div className="bg-blue-50 border-l-4 border-brand-blue p-4 rounded-r-lg h-full">
            <div className="flex items-center mb-2">
              <BotIcon className="h-6 w-6 text-brand-blue mr-3" />
              <h3 className="text-lg font-semibold text-brand-dark">Gemini AI Analysis</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {alert.geminiSummary}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-6 flex items-center justify-end space-x-4">
        <button className="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors">
          Acknowledge
        </button>
        <button className="px-6 py-2 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-blue/90 transition-colors">
          Dispatch Crew
        </button>
      </div>
    </div>
  );
};

export default AlertDetails;
