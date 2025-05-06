import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, FileText, Check, AlertCircle } from 'lucide-react';

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="hover-card bg-white">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-2">
                  <FileText className="h-6 w-6 text-aero-primary" />
                </div>
                <CardTitle>Pré-enregistrement</CardTitle>
                <CardDescription>
                  Complétez votre formulaire de pré-enregistrement en 5 étapes
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
                  <div className="h-full bg-aero-primary w-1/5 rounded-full"></div>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">Étape 1 sur 5 complétée</p>
                <div className="grid grid-cols-5 gap-1 mt-3">
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto rounded-full bg-aero-primary text-white text-xs flex items-center justify-center">1</div>
                    <p className="text-xs mt-1">Personnel</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center">2</div>
                    <p className="text-xs mt-1">Documents</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center">3</div>
                    <p className="text-xs mt-1">Vol</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center">4</div>
                    <p className="text-xs mt-1">Biométrie</p>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center">5</div>
                    <p className="text-xs mt-1">Résumé</p>
                  </div>
                </div>
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
                  Accédez à votre QR code sécurisé pour un passage rapide
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3 flex items-center justify-center">
                <div className="bg-sky-100 text-aero-primary rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    <p className="text-sm text-center">Non disponible - Complétez l'enregistrement</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/dashboard/qrcode" className="w-full">
                  <Button className="w-full" disabled>Voir mon QR code</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <Card className="bg-white mb-6">
            <CardHeader className="pb-4">
              <CardTitle>État de votre pré-enregistrement</CardTitle>
              <CardDescription>
                Voici l'état actuel de votre pré-enregistrement
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Informations personnelles</p>
                      <p className="text-sm text-muted-foreground">Complété</p>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">
                      Validé
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Documents de voyage</p>
                      <p className="text-sm text-muted-foreground">En attente</p>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                      À compléter
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Informations de vol</p>
                      <p className="text-sm text-muted-foreground">En attente</p>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                      À compléter
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-gray-600">Biométrie</p>
                      <p className="text-sm text-muted-foreground">En attente</p>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                      Optionnel
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/dashboard/status" className="w-full">
                <Button className="w-full" variant="outline">Voir les détails</Button>
              </Link>
            </CardFooter>
          </Card>
          
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
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/dashboard/registration">
                      <Button>Commencer le pré-enregistrement</Button>
                    </Link>
                    <Link to="/dashboard/help">
                      <Button variant="outline">Besoin d'aide ?</Button>
                    </Link>
                  </div>
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
