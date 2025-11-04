
import React from 'react';
import { AlertStatus } from '../types';

interface StatusBadgeProps {
  status: AlertStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const baseClasses = 'px-3 py-1 text-xs font-semibold rounded-full inline-block';
  let specificClasses = '';

  switch (status) {
    case AlertStatus.Critical:
      specificClasses = 'bg-status-critical/20 text-status-critical';
      break;
    case AlertStatus.High:
      specificClasses = 'bg-status-high/20 text-status-high';
      break;
    case AlertStatus.Routine:
      specificClasses = 'bg-status-routine/20 text-status-routine';
      break;
    default:
      specificClasses = 'bg-gray-200 text-gray-800';
  }

  return <span className={`${baseClasses} ${specificClasses}`}>{status}</span>;
};

export default StatusBadge;
