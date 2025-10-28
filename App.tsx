import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import InventoryPage from './components/InventoryPage';
import EntryPage from './components/EntryPage';
import ExitPage from './components/ExitPage';
import HistoryPage from './components/HistoryPage';
import SignaturePage from './components/SignaturePage';
import ScannerPage from './components/ScannerPage';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Normalizamos el hash para asegurarnos de que siempre empiece con #/
  const getRoute = () => {
      const hash = window.location.hash;
      return hash.startsWith('#/') ? hash : '#/';
  }

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
    };

    window.addEventListener('hashchange', handleHashChange, false);
    
    // Set initial route
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/inventario':
        return <InventoryPage />;
      case '#/movimientos/entrada':
        return <EntryPage />;
      case '#/movimientos/salida':
        return <ExitPage />;
      case '#/historial':
        return <HistoryPage />;
      case '#/firma-digital':
        return <SignaturePage />;
      case '#/escaner-qr':
        return <ScannerPage />;
      case '#/':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute={route} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;