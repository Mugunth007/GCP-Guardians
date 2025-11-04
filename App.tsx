
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AllAlerts from './pages/AllAlerts';
import AlertDetails from './pages/AlertDetails';
import PublicPortal from './pages/PublicPortal';

const App: React.FC = () => {
  const location = useLocation();
  const isPublicPortal = location.pathname === '/public';

  if (isPublicPortal) {
    return (
      <Routes>
        <Route path="/public" element={<PublicPortal />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alerts" element={<AllAlerts />} />
            <Route path="/alerts/:id" element={<AlertDetails />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
