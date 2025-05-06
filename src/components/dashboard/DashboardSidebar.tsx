
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { QrCode, Home, FileText, Check, LogOut } from 'lucide-react';

const navItems = [
  {
    label: 'Accueil',
    href: '/dashboard',
    icon: Home,
  },
  {
    label: 'Pré-enregistrement',
    href: '/dashboard/registration',
    icon: FileText,
  },
  {
    label: 'Mon QR Code',
    href: '/dashboard/qrcode',
    icon: QrCode,
  },
  {
    label: 'Statut',
    href: '/dashboard/status',
    icon: Check,
  },
];

interface DashboardSidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const DashboardSidebar = ({ isMobileOpen, setIsMobileOpen }: DashboardSidebarProps) => {
  const location = useLocation();
  
  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-white shadow-lg transition-transform duration-300 transform",
        isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <Link to="/" className="flex items-center gap-2 text-aero-primary">
              <QrCode className="h-6 w-6" />
              <span className="font-display text-xl font-bold">Aero<span className="text-aero-secondary">Flow</span></span>
            </Link>
          </div>
          
          <nav className="p-4 flex-grow">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                      location.pathname === item.href
                        ? "bg-sky-100 text-aero-primary font-medium"
                        : "hover:bg-sky-50"
                    )}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <Link 
              to="/logout" 
              className="flex items-center gap-3 px-4 py-3 rounded-md text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Déconnexion</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
