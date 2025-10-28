import React from 'react';
import IconBell from './icons/IconBell';
import IconChevronDown from './icons/IconChevronDown';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Abrir barra lateral</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-5">
            <button className="relative w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full">
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
              <IconBell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700 border-none" />
            <div className="flex items-center space-x-3 cursor-pointer">
              <img className="h-9 w-9 rounded-full object-cover" src="https://picsum.photos/100/100" alt="User" />
              <div>
                <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm">Dra. Eleanor Vance</span>
              </div>
              <IconChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;