
import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode } from 'lucide-react';

interface DashboardHeaderProps {
  toggleSidebar: () => void;
  title: string;
}

const DashboardHeader = ({ toggleSidebar, title }: DashboardHeaderProps) => {
  return (
    <header className="bg-white border-b sticky top-0 z-20 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleSidebar}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </Button>
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:flex items-center mr-4 text-sm text-muted-foreground">
            Jean Dupont
          </div>
          <div className="flex h-8 w-8 rounded-full bg-aero-primary text-white items-center justify-center">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
