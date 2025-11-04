
import React from 'react';
import { UserIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
      <h1 className="text-xl font-semibold text-brand-dark">
        GCP Guardians - Proactive Maharashtra
      </h1>
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <UserIcon className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
