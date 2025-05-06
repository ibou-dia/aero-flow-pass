
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Download } from 'lucide-react';

const QRCodePage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simuler le téléchargement
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-sky-50">
      <DashboardSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} title="Mon QR Code" />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Votre QR code sécurisé</h2>
            <p className="text-muted-foreground">
              Présentez ce QR code à l'aéroport pour un passage simplifié
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                      <span className="mr-1 w-2 h-2 rounded-full bg-green-600"></span>
                      Validé
                    </span>
                  </div>
                  
                  <div className="p-3 bg-white border-4 border-aero-primary rounded-lg mb-6">
                    <div className="w-64 h-64 bg-gray-900 flex items-center justify-center">
                      {/* QR Code image */}
                      <svg viewBox="0 0 100 100" width="240" height="240">
                        <path fill="white" d="M0,0v100h100V0H0z M41.667,83.333h-25v-25h25V83.333z M41.667,41.667h-25v-25h25V41.667z M83.333,83.333h-25v-25h25V83.333z M83.333,41.667h-25v-25h25V41.667z"/>
                        <path fill="black" d="M33.333,33.333H16.667V16.667h16.667V33.333z M33.333,75H16.667V58.333h16.667V75z M75,33.333H58.333V16.667H75V33.333z M75,75H58.333V58.333H75V75z M25,25h-8.333v-8.333H25V25z M25,66.667h-8.333v-8.333H25V66.667z M66.667,25h-8.333v-8.333h8.333V25z M66.667,66.667h-8.333v-8.333h8.333V66.667z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="w-full space-y-4">
                    <dl className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-sky-50 rounded">
                        <dt className="text-xs text-muted-foreground mb-1">Passager</dt>
                        <dd className="font-medium">Jean Dupont</dd>
                      </div>
                      <div className="p-3 bg-sky-50 rounded">
                        <dt className="text-xs text-muted-foreground mb-1">Vol</dt>
                        <dd className="font-medium">AF1234</dd>
                      </div>
                      <div className="p-3 bg-sky-50 rounded">
                        <dt className="text-xs text-muted-foreground mb-1">Date</dt>
                        <dd className="font-medium">25 Mai 2025</dd>
                      </div>
                      <div className="p-3 bg-sky-50 rounded">
                        <dt className="text-xs text-muted-foreground mb-1">Destination</dt>
                        <dd className="font-medium">New York (JFK)</dd>
                      </div>
                    </dl>
                    
                    <Button 
                      onClick={handleDownload}
                      className="w-full flex items-center justify-center gap-2"
                      disabled={isDownloading}
                    >
                      <Download className="h-4 w-4" />
                      {isDownloading ? "Téléchargement..." : "Télécharger le QR Code"}
                    </Button>
                    
                    <div className="flex items-start gap-3 p-4 bg-sky-50 rounded-lg">
                      <Shield className="h-5 w-5 text-aero-primary flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">
                        Pour assurer la sécurité de vos données, ce QR code est crypté et ne peut 
                        être lu que par les systèmes autorisés dans les aéroports.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 p-6 bg-aero-primary rounded-lg text-white animate-fade-in">
              <h3 className="font-semibold text-lg mb-3">Instructions :</h3>
              <ol className="list-decimal pl-5 space-y-2 opacity-90">
                <li>Présentez ce QR code à l'entrée du terminal ou aux points de contrôle.</li>
                <li>Si vous avez activé la biométrie, dirigez-vous vers les e-gates pour un passage automatisé.</li>
                <li>Gardez votre passeport avec vous comme document de secours.</li>
              </ol>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default QRCodePage;
