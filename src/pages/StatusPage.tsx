
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatusPage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const statusSteps = [
    { id: 'submitted', label: 'Documents soumis', completed: true, date: '22/05/2025 14:30' },
    { id: 'processing', label: 'En cours de vérification', completed: true, date: '22/05/2025 14:45' },
    { id: 'validated', label: 'Documents validés', completed: true, date: '22/05/2025 15:10' },
    { id: 'qrgenerated', label: 'QR code généré', completed: true, date: '22/05/2025 15:15' },
  ];

  return (
    <div className="min-h-screen flex bg-sky-50">
      <DashboardSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} title="Statut" />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Statut de votre demande</h2>
            <p className="text-muted-foreground">
              Suivez l'état de votre pré-enregistrement en temps réel
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white shadow-md animate-fade-in mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Pré-enregistrement validé</h3>
                    <p className="text-sm text-muted-foreground">Votre QR code a été généré avec succès</p>
                  </div>
                  <div className="ml-auto">
                    <Link to="/dashboard/qrcode">
                      <Button size="sm">Voir mon QR code</Button>
                    </Link>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {statusSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                      <div className="flex items-start gap-4">
                        <div className="relative z-10">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-500 text-white' : 'bg-sky-100 text-muted-foreground'
                          }`}>
                            {step.completed ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="pt-1">
                          <h4 className={`font-medium ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {step.label}
                          </h4>
                          {step.completed && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {step.date}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {index < statusSteps.length - 1 && (
                        <div className={`absolute top-8 left-4 ml-px h-12 w-0.5 ${
                          step.completed && statusSteps[index + 1].completed ? 'bg-green-500' : 'bg-sky-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-md animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Détails du vol</h3>
                  <dl className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <dt className="text-sm text-muted-foreground">Compagnie</dt>
                      <dd className="text-sm font-medium">Air France</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <dt className="text-sm text-muted-foreground">Numéro de vol</dt>
                      <dd className="text-sm font-medium">AF1234</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <dt className="text-sm text-muted-foreground">Date de départ</dt>
                      <dd className="text-sm font-medium">25 Mai 2025</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <dt className="text-sm text-muted-foreground">Heure de départ</dt>
                      <dd className="text-sm font-medium">10:30</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <dt className="text-sm text-muted-foreground">Destination</dt>
                      <dd className="text-sm font-medium">New York (JFK)</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Options activées</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span>Validation automatique des documents</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span>QR code sécurisé</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">
                        <span className="h-4 w-4 text-sky-500">✓</span>
                      </div>
                      <span>Reconnaissance faciale</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StatusPage;
