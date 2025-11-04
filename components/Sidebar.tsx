
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, AlertTriangleIcon, GlobeIcon } from './icons';

const Sidebar: React.FC = () => {
  const commonLinkClass = "flex items-center px-4 py-3 text-gray-200 hover:bg-brand-lightblue hover:text-white transition-colors duration-200 rounded-lg";
  const activeLinkClass = "bg-brand-lightblue font-bold text-white";

  return (
    <aside className="hidden md:flex flex-col w-64 bg-brand-dark text-white p-4 space-y-2">
      <div className="text-2xl font-bold text-white p-4 text-center border-b border-gray-700">
        P-M Dashboard
      </div>
      <nav className="mt-4 flex-1">
        <NavLink 
          to="/" 
          className={({ isActive }) => `${commonLinkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <LayoutDashboardIcon className="h-5 w-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink 
          to="/alerts" 
          className={({ isActive }) => `${commonLinkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <AlertTriangleIcon className="h-5 w-5 mr-3" />
          All Alerts
        </NavLink>
        <NavLink 
          to="/public" 
          className={({ isActive }) => `${commonLinkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <GlobeIcon className="h-5 w-5 mr-3" />
          Public Portal
        </NavLink>
      </nav>
      <div className="text-center text-xs text-gray-500 p-2">
        &copy; 2024 GCP Guardians
      </div>
    </aside>
  );
};

export default Sidebar;
