import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    console.log(`Navigating to: ${page}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;

