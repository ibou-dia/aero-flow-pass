
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import RegistrationForm from '@/components/registration/RegistrationForm';
import { useState } from 'react';

const RegistrationPage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="min-h-screen flex bg-sky-50">
      <DashboardSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} title="Pré-enregistrement" />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Formulaire de pré-enregistrement</h2>
            <p className="text-muted-foreground">
              Complétez ce formulaire en 4 étapes pour obtenir votre QR code.
            </p>
          </div>
          
          <RegistrationForm />
        </main>
      </div>
    </div>
  );
};

export default RegistrationPage;
