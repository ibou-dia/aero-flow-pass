
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, FileText, Check } from 'lucide-react';

const Dashboard = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="min-h-screen flex bg-sky-50">
      <DashboardSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} title="Tableau de bord" />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Bienvenue, Jean</h2>
            <p className="text-muted-foreground">
              Gérez votre pré-enregistrement et accédez à votre QR code sécurisé.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-card bg-white">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-2">
                  <FileText className="h-6 w-6 text-aero-primary" />
                </div>
                <CardTitle>Pré-enregistrement</CardTitle>
                <CardDescription>
                  Complétez votre formulaire de pré-enregistrement
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
                  <div className="h-full bg-aero-primary w-1/4 rounded-full"></div>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">Étape 1 sur 4 complétée</p>
              </CardContent>
              <CardFooter>
                <Link to="/dashboard/registration" className="w-full">
                  <Button className="w-full">Continuer</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover-card bg-white">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-2">
                  <QrCode className="h-6 w-6 text-aero-primary" />
                </div>
                <CardTitle>Mon QR Code</CardTitle>
                <CardDescription>
                  Accédez à votre QR code sécurisé
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3 flex items-center justify-center">
                <div className="bg-sky-100 text-aero-primary rounded-lg p-4">
                  <p className="text-sm text-center">Non disponible</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/dashboard/qrcode" className="w-full">
                  <Button className="w-full" disabled>Voir mon QR code</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover-card bg-white">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-2">
                  <Check className="h-6 w-6 text-aero-primary" />
                </div>
                <CardTitle>Statut</CardTitle>
                <CardDescription>
                  Vérifiez le statut de votre demande
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="bg-sky-100 text-aero-primary p-3 rounded-lg text-center">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-800">
                      En cours
                    </span>
                  </div>
                  <p className="text-sm">Votre pré-enregistrement n'est pas complet</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/dashboard/status" className="w-full">
                  <Button className="w-full" variant="outline">Voir les détails</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Votre prochain voyage</CardTitle>
                <CardDescription>
                  Aucun voyage n'est planifié pour le moment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <p className="text-muted-foreground mb-4">
                    Complétez votre pré-enregistrement pour votre prochain voyage
                  </p>
                  <Link to="/dashboard/registration">
                    <Button>Commencer le pré-enregistrement</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
