import React, { useState, useEffect, useRef } from 'react';
import IconHospital from './icons/IconHospital';
import IconDashboard from './icons/IconDashboard';
import IconEquipment from './icons/IconEquipment';
import IconMove from './icons/IconMove';
import IconHistory from './icons/IconHistory';
import IconSignature from './icons/IconSignature';
import IconQrCode from './icons/IconQrCode';
import IconChevronDown from './icons/IconChevronDown';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  currentRoute: string;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, currentRoute }) => {
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const [openDropdown, setOpenDropdown] = useState<string>('');

  const navLinks = [
    { href: '#/', label: 'Dashboard', icon: IconDashboard },
    { href: '#/inventario', label: 'Inventario', icon: IconEquipment },
    {
      label: 'Movimientos',
      icon: IconMove,
      children: [
        { href: '#/movimientos/entrada', label: 'Entrada' },
        { href: '#/movimientos/salida', label: 'Salida' },
      ],
    },
    { href: '#/historial', label: 'Historial', icon: IconHistory },
    { href: '#/firma-digital', label: 'Firma Digital Única', icon: IconSignature },
    { href: '#/escaner-qr', label: 'Escaner QR', icon: IconQrCode },
  ];
  
  useEffect(() => {
    // Open dropdown if a child link is active
    const activeParent = navLinks.find(link => 
        link.children?.some(child => child.href === currentRoute)
    );
    if (activeParent) {
        setOpenDropdown(activeParent.label);
    }
  }, [currentRoute]);


  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <a href="#/" className="flex items-center">
             <IconHospital className="w-8 h-8 text-white" />
             <span className="text-white text-lg font-bold ml-3">MediTrack</span>
          </a>
        </div>

        {/* Links */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              <span>Menú</span>
            </h3>
            <ul className="mt-3">
             {navLinks.map(link => {
                if (link.children) {
                  const isDropdownOpen = openDropdown === link.label;
                  const isParentActive = link.children.some(child => child.href === currentRoute);
                  return (
                      <React.Fragment key={link.label}>
                          <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${isParentActive ? 'bg-gray-900' : ''}`}>
                              <a
                                  href="#/"
                                  onClick={(e) => {
                                      e.preventDefault();
                                      setOpenDropdown(isDropdownOpen ? '' : link.label);
                                  }}
                                  className={`block text-gray-200 hover:text-white truncate transition duration-150`}
                              >
                                  <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                          <link.icon className="shrink-0 h-6 w-6" />
                                          <span className="text-sm font-medium ml-3">{link.label}</span>
                                      </div>
                                      <IconChevronDown className={`w-4 h-4 shrink-0 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                  </div>
                              </a>
                          </li>
                          {isDropdownOpen && (
                              <ul className="pl-9 mt-1 space-y-1">
                                  {link.children.map(child => {
                                      const isChildActive = currentRoute === child.href;
                                      return (
                                          <li key={child.href}>
                                              <a
                                                  href={child.href}
                                                  onClick={() => setSidebarOpen(false)}
                                                  className={`block transition duration-150 truncate text-sm ${isChildActive ? 'text-primary-400' : 'text-gray-400 hover:text-gray-200'}`}
                                              >
                                                  {child.label}
                                              </a>
                                          </li>
                                      );
                                  })}
                              </ul>
                          )}
                      </React.Fragment>
                  );
              } else {
                  const isActive = currentRoute === link.href;
                  return (
                    <li key={link.href} className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${isActive ? 'bg-gray-900' : ''}`}>
                      <a
                        href={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`block text-gray-200 hover:text-white truncate transition duration-150`}
                      >
                        <div className="flex items-center">
                          <link.icon className="shrink-0 h-6 w-6" />
                          <span className="text-sm font-medium ml-3">{link.label}</span>
                        </div>
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;