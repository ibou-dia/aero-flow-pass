import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, User, QrCode, Shield, Clock, Plane, Camera, CheckCircle, Smartphone, Database, Laptop, MapPin, Building, Zap, Home, Info, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';

const AboutPage = () => {
  const location = useLocation();

  // Effet pour scroller vers le haut quand on clique sur le lien actif
  useEffect(() => {
    // Sélectionne tous les liens dans le header qui pointent vers la page actuelle
    const activeLinks = document.querySelectorAll(`a[href="${location.pathname}"]`);
    
    // Ajoute un écouteur d'événement à chacun de ces liens
    activeLinks.forEach(link => {
      const clickHandler = (e) => {
        // Si nous sommes déjà sur cette page, nous faisons défiler vers le haut
        if (location.pathname === link.getAttribute('href')) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      
      link.addEventListener('click', clickHandler);
      
      // Nettoyage
      return () => {
        link.removeEventListener('click', clickHandler);
      };
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="overflow-x-hidden">
        {/* Hero Section with animation */}
        <section className="relative bg-gradient-to-b from-sky-100 to-white py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Révolutionnez <span className="text-aero-primary">votre expérience</span> aéroportuaire</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Découvrez comment AeroFlow, la solution créée par l'AIBD du Sénégal, transforme le processus de contrôle aéroportuaire grâce à une technologie de pointe combinant pré-validation des documents et reconnaissance faciale.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Gain de temps de 70%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Sécurité de niveau bancaire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Solution dédiée à l'aéroport AIBD du Sénégal</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-sky-500 rounded-full opacity-10 animate-pulse-slow"></div>
                  <div className="glass-card absolute left-0 top-1/4 bottom-0 right-1/4 rounded-2xl shadow-lg transform -rotate-6 animate-float-reverse overflow-hidden">
                    {/* Illustration d'un visage avec reconnaissance faciale */}
                    <div className="bg-white h-full w-full p-4 flex flex-col">
                      <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center relative">
                        <div className="w-1/2 h-1/2 rounded-full bg-gray-300"></div>
                        <div className="absolute inset-0 border-2 border-aero-primary rounded-lg animate-pulse-slow"></div>
                        <div className="absolute w-full h-full">
                          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-aero-primary rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card absolute right-0 top-0 bottom-0 left-1/4 rounded-2xl shadow-lg transform rotate-6 animate-float overflow-hidden">
                    {/* Illustration d'un smartphone avec un QR code */}
                    <div className="bg-white h-full w-full p-4 flex flex-col">
                      <div className="w-1/4 h-1 bg-gray-200 rounded-full mx-auto mb-2"></div>
                      <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-white p-4 rounded-lg shadow-sm">
                          <div className="w-full h-full bg-black flex items-center justify-center">
                            <QrCode className="w-3/4 h-3/4 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="w-1/3 h-1 bg-gray-200 rounded-full mx-auto mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-50 transform skew-x-12 translate-x-1/2 z-0 max-w-screen-lg"></div>
        </section>

        {/* Process Visualization - Detailed Step-by-Step Guide */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Le processus détaillé</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Découvrez en détail comment fonctionne AeroFlow à chaque étape de votre parcours
            </p>
            
            <div className="relative">
              {/* Horizontal Line Connector */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-sky-100 z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100 transform transition-transform hover:-translate-y-2">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 rounded-full bg-aero-primary text-white flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0">
                      01
                    </div>
                    {/* Connector to center line - only visible on desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-16 w-full h-1 bg-sky-100"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">Inscription et pré-enregistrement</h3>
                  <div className="bg-gray-100 h-40 rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-aero-primary/10 to-sky-50 flex items-center justify-center">
                      <User className="h-16 w-16 text-aero-primary opacity-80" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">1.</span> Créez un compte sécurisé
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">2.</span> Renseignez vos informations personnelles
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">3.</span> Vérifiez votre identité par email
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100 transform transition-transform hover:-translate-y-2">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 rounded-full bg-aero-primary text-white flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0">
                      02
                    </div>
                    {/* Connector to center line - only visible on desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-16 w-full h-1 bg-sky-100"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">Téléversement de documents</h3>
                  <div className="bg-gray-100 h-40 rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-aero-primary/10 to-sky-50 flex items-center justify-center">
                      <Database className="h-16 w-16 text-aero-primary opacity-80" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">1.</span> Scannez votre passeport ou visa
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">2.</span> Ajoutez vos billets électroniques
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">3.</span> Notre système vérifie automatiquement vos documents
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100 transform transition-transform hover:-translate-y-2">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 rounded-full bg-aero-primary text-white flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0">
                      03
                    </div>
                    {/* Connector to center line - only visible on desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-16 w-full h-1 bg-sky-100"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">Activation biométrique</h3>
                  <div className="bg-gray-100 h-40 rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-aero-primary/10 to-sky-50 flex items-center justify-center">
                      <Camera className="h-16 w-16 text-aero-primary opacity-80" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">1.</span> Suivez le guide de prise de photo
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">2.</span> Notre IA analyse les points biométriques clés
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">3.</span> Le modèle est crypté et stocké de façon sécurisée
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-sky-100 transform transition-transform hover:-translate-y-2">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 rounded-full bg-aero-primary text-white flex items-center justify-center text-2xl font-bold mx-auto lg:mx-0">
                      04
                    </div>
                    {/* Connector to center line - only visible on desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-16 w-full h-1 bg-sky-100"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center lg:text-left">Validation et QR code</h3>
                  <div className="bg-gray-100 h-40 rounded-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-aero-primary/10 to-sky-50 flex items-center justify-center">
                      <QrCode className="h-16 w-16 text-aero-primary opacity-80" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">1.</span> Vos informations sont validées automatiquement
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">2.</span> Vous recevez un QR code unique et sécurisé
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">3.</span> Le code est disponible hors ligne dans l'application
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage at Airport - Interactive visualization */}
        <section className="py-20 bg-gradient-to-b from-white to-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">À l'aéroport : comment ça se passe</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Découvrez l'expérience de passage aux contrôles avec AeroFlow
            </p>
            
            <Tabs defaultValue="standard" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="standard" className="text-lg py-3">
                  <Smartphone className="h-5 w-5 mr-2 inline-block" />
                  Avec QR code
                </TabsTrigger>
                <TabsTrigger value="biometric" className="text-lg py-3">
                  <Camera className="h-5 w-5 mr-2 inline-block" />
                  Avec reconnaissance faciale
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="standard" className="bg-white rounded-xl shadow-lg border border-sky-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Passage avec QR code</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aero-primary text-white flex items-center justify-center font-bold">1</div>
                        <div>
                          <h4 className="font-medium mb-1">Arrivée au contrôle</h4>
                          <p className="text-muted-foreground">Dirigez-vous vers les bornes dédiées AeroFlow, identifiées par notre logo.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aero-primary text-white flex items-center justify-center font-bold">2</div>
                        <div>
                          <h4 className="font-medium mb-1">Scan du QR code</h4>
                          <p className="text-muted-foreground">Ouvrez l'application AeroFlow, affichez votre QR code et scannez-le sur la borne.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aero-primary text-white flex items-center justify-center font-bold">3</div>
                        <div>
                          <h4 className="font-medium mb-1">Vérification d'identité</h4>
                          <p className="text-muted-foreground">Un agent peut demander votre passeport pour confirmer votre identité.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aero-primary text-white flex items-center justify-center font-bold">4</div>
                        <div>
                          <h4 className="font-medium mb-1">Passage autorisé</h4>
                          <p className="text-muted-foreground">La porte s'ouvre automatiquement, aucun document physique n'est nécessaire.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 relative">
                        <div className="absolute inset-0 border-4 border-aero-primary rounded-lg"></div>
                        <div className="absolute inset-10 bg-white flex items-center justify-center">
                          <QrCode className="h-32 w-32 text-black" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center animate-bounce-slow">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="biometric" className="bg-white rounded-xl shadow-lg border border-sky-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Passage avec reconnaissance faciale</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aero-primary text-white flex items-center justify-center font-bold">1</div>
                        <div>
                          <h4 className="font-medium mb-1">Arrivée à l'e-gate</h4>
                          <p className="text-muted-foreground">Dirigez-vous directement vers les e-gates compatibles AeroFlow.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aero-primary text-white flex items-center justify-center font-bold">2</div>
                        <div>
                          <h4 className="font-medium mb-1">Reconnaissance automatique</h4>
                          <p className="text-muted-foreground">Placez-vous devant la caméra et regardez l'écran. Le système vous reconnaît automatiquement.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aero-primary text-white flex items-center justify-center font-bold">3</div>
                        <div>
                          <h4 className="font-medium mb-1">Vérification instantanée</h4>
                          <p className="text-muted-foreground">Vos données biométriques sont comparées à celles stockées. Processus ultra-rapide.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-aero-primary text-white flex items-center justify-center font-bold">4</div>
                        <div>
                          <h4 className="font-medium mb-1">Passage sans contact</h4>
                          <p className="text-muted-foreground">La porte s'ouvre automatiquement, aucun document physique n'est nécessaire.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center relative">
                        <div className="w-48 h-48 rounded-full bg-gray-200"></div>
                        <div className="absolute inset-0 border-2 border-aero-primary rounded-full animate-pulse"></div>
                        <div className="absolute w-full h-full">
                          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-aero-primary rounded-lg"></div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center animate-bounce-slow">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Technology Showcase Section - Replacing the HowItWorks component */}
        <section className="py-20 bg-gradient-to-br from-aero-primary/5 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Notre technologie en détail</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Découvrez comment AeroFlow combine plusieurs technologies de pointe pour rendre votre expérience unique
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
                <div className="w-16 h-16 bg-aero-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Camera className="h-8 w-8 text-aero-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Reconnaissance faciale de pointe</h3>
                <p className="text-muted-foreground mb-6">
                  Notre technologie de reconnaissance faciale utilise un réseau neuronal profond capable d'identifier plus de 128 points de référence sur votre visage. Elle peut vous reconnaître même avec des lunettes, un léger changement de coiffure ou une barbe.
                </p>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center relative">
                      {/* Utilisation d'une icône simple de visage */}
                      <svg className="w-32 h-32 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="currentColor" />
                        <path d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z" fill="currentColor" />
                        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      
                      {/* Cadre de détection */}
                      <div className="absolute inset-4 border-2 border-dashed border-aero-primary rounded-xl animate-pulse-slow"></div>
                      
                      {/* Indicateur de statut */}
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-green-100 rounded-md text-xs font-medium text-green-700">
                        Identifié
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
                <div className="w-16 h-16 bg-aero-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-aero-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Sécurité des données biométriques</h3>
                <p className="text-muted-foreground mb-6">
                  Vos données biométriques ne sont jamais stockées sous forme d'images, mais uniquement comme modèles mathématiques chiffrés avec une clé de 256 bits. Même en cas de compromission, votre identité reste protégée.
                </p>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-8 grid-rows-8 w-3/4 h-3/4 gap-1">
                      {Array(64).fill(0).map((_, i) => (
                        <div 
                          key={i} 
                          className={`${Math.random() > 0.5 ? 'bg-aero-primary/20' : 'bg-gray-200'} 
                                      ${Math.random() > 0.9 ? 'animate-pulse-slow' : ''}`}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-green-600 font-medium">Chiffré</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
                <div className="w-16 h-16 bg-aero-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-aero-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Vérification de documents avancée</h3>
                <p className="text-muted-foreground mb-6">
                  Notre système analyse plus de 50 points de sécurité différents sur les documents de voyage, détectant les faux en quelques secondes. Nous vérifions également la validité des visas et la conformité avec les restrictions de voyage.
                </p>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-md p-4 flex flex-col">
                      <div className="flex-1 p-2 border border-gray-200 rounded-md mb-2 relative">
                        <div className="absolute top-2 left-2 h-12 w-12 bg-gray-300 rounded"></div>
                        <div className="absolute top-2 right-2 w-16 h-4 bg-gray-200 rounded"></div>
                        <div className="absolute top-10 right-2 w-12 h-3 bg-gray-200 rounded"></div>
                        <div className="absolute bottom-2 left-2 right-2 h-6 bg-gray-300 rounded"></div>
                        
                        <div className="absolute inset-0 border-2 border-aero-primary rounded-md animate-pulse-slow opacity-50"></div>
                        <div className="absolute bottom-10 left-4 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <div className="absolute top-4 right-20 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                      </div>
                      <div className="h-6 bg-gradient-to-r from-green-400 to-aero-primary rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
                <div className="w-16 h-16 bg-aero-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-aero-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Traitement en temps réel</h3>
                <p className="text-muted-foreground mb-6">
                  Notre infrastructure cloud traite les données en moins de 500 millisecondes, assurant une vérification quasi instantanée à l'aéroport. Les serveurs sont répartis globalement pour minimiser la latence.
                </p>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-xs">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
                      <div className="absolute top-0 left-0 w-3/4 h-1 bg-aero-primary animate-[grow_1.5s_ease-in-out_infinite]"></div>
                      
                      <div className="mt-8 flex justify-between">
                        <div className="flex flex-col items-center">
                          <Smartphone className="h-8 w-8 text-gray-400 mb-2" />
                          <div className="h-2 w-2 rounded-full bg-aero-primary animate-ping"></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <Building className="h-8 w-8 text-gray-400 mb-2" />
                          <div className="h-2 w-2 rounded-full bg-aero-primary animate-ping" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <Laptop className="h-8 w-8 text-gray-400 mb-2" />
                          <div className="h-2 w-2 rounded-full bg-aero-primary animate-ping" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-center text-xs font-medium text-aero-primary">
                        <span className="animate-[fadeInOut_2s_ease-in-out_infinite]">0.5s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Airport coverage map */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Notre aéroport</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              AeroFlow est une solution développée par l'AIBD du Sénégal pour optimiser votre expérience
            </p>
            
            <div className="relative aspect-[16/9] max-w-4xl mx-auto bg-sky-50 rounded-xl overflow-hidden shadow-lg">
              {/* Stylized airport map */}
              <div className="absolute inset-0 bg-sky-100">
                {/* Simplified airport terminal layout */}
                <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-sky-200 rounded-lg"></div>
                <div className="absolute top-[40%] left-[20%] right-[20%] h-[10%] bg-white"></div>
                <div className="absolute top-[30%] left-[40%] h-[30%] w-[5%] bg-white"></div>
                <div className="absolute top-[60%] left-[30%] h-[5%] w-[30%] bg-white"></div>
              </div>
              
              {/* Terminal points */}
              <div className="absolute top-[35%] left-[30%] h-3 w-3 bg-aero-primary rounded-full animate-ping"></div>
              <div className="absolute top-[35%] left-[50%] h-3 w-3 bg-aero-primary rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute top-[45%] left-[65%] h-3 w-3 bg-aero-primary rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
              
              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-aero-primary rounded-full"></div>
                  <span className="text-xs">Points de contrôle AeroFlow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                  <span className="text-xs">Prochainement</span>
                </div>
              </div>
              
              {/* Terminal info */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
                <span className="text-xs font-semibold block mb-2">Zones compatibles :</span>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-aero-primary" />
                    <span>Terminal international</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-aero-primary" />
                    <span>Terminal domestique</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-aero-primary" />
                    <span>Zone d'immigration</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-aero-primary text-aero-primary mt-4">
                Voir le plan détaillé
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section with accordions */}
        <section className="py-20 bg-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Questions fréquentes</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Tout ce que vous devez savoir sur AeroFlow
            </p>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md overflow-hidden">
                <AccordionItem value="item-1" className="border-b px-6">
                  <AccordionTrigger className="py-5 text-lg font-medium">
                    Comment fonctionne la reconnaissance faciale ?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    <p className="mb-3">
                      Notre technologie de reconnaissance faciale fonctionne en créant un modèle mathématique unique de votre visage, basé sur des points de référence spécifiques comme la distance entre vos yeux, la forme de votre mâchoire, etc.
                    </p>
                    <p className="mb-3">
                      Lorsque vous êtes à l'aéroport AIBD du Sénégal, une caméra capture votre visage et notre système compare instantanément le nouveau modèle avec celui que vous avez enregistré lors de votre inscription.
                    </p>
                    <p>
                      Cette technologie est précise à 99,9% et fonctionne même si vous changez légèrement d'apparence (lunettes, barbe, coiffure).
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b px-6">
                  <AccordionTrigger className="py-5 text-lg font-medium">
                    Que se passe-t-il si le système ne me reconnaît pas ?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    <p className="mb-3">
                      Dans le rare cas où la reconnaissance faciale échoue, vous pouvez toujours utiliser votre QR code comme méthode d'identification alternative.
                    </p>
                    <p className="mb-3">
                      Un agent de sécurité peut également procéder à une vérification manuelle de vos documents.
                    </p>
                    <p>
                      Si vous rencontrez des problèmes persistants, vous pouvez mettre à jour votre modèle facial dans votre profil.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b px-6">
                  <AccordionTrigger className="py-5 text-lg font-medium">
                    Mes données sont-elles en sécurité ?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    <p className="mb-3">
                      Absolument. Nous utilisons un chiffrement de niveau militaire pour protéger toutes vos données personnelles et biométriques.
                    </p>
                    <p className="mb-3">
                      Nous ne stockons jamais d'images de votre visage, seulement un modèle mathématique crypté qui ne peut pas être reconverti en image.
                    </p>
                    <p>
                      Notre traitement des données est conforme au RGPD et à toutes les réglementations en vigueur en France.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b px-6">
                  <AccordionTrigger className="py-5 text-lg font-medium">
                    Combien de temps avant mon vol dois-je m'inscrire ?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    <p className="mb-3">
                      Nous recommandons de compléter votre enregistrement au moins 24 heures avant votre vol pour garantir que toutes les vérifications soient effectuées.
                    </p>
                    <p className="mb-3">
                      Cependant, notre système peut traiter les demandes urgentes en aussi peu que 2 heures dans la plupart des cas.
                    </p>
                    <p>
                      Une fois votre profil créé, vous pouvez l'utiliser pour tous vos vols au départ de l'aéroport AIBD du Sénégal en ajoutant simplement les nouvelles informations de vol.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="px-6">
                  <AccordionTrigger className="py-5 text-lg font-medium">
                    AeroFlow remplace-t-il mes documents de voyage ?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    <p className="mb-3">
                      Non, AeroFlow ne remplace pas vos documents de voyage officiels. Vous devez toujours avoir votre passeport et autres documents requis avec vous.
                    </p>
                    <p className="mb-3">
                      AeroFlow, développé par l'AIBD, accélère le processus de vérification à l'aéroport, mais les autorités d'immigration peuvent toujours demander à voir vos documents physiques.
                    </p>
                    <p>
                      Dans certains terminaux, la vérification biométrique peut remplacer la présentation de la carte d'embarquement, mais jamais le passeport.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-aero-primary to-aero-secondary text-white overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à révolutionner votre expérience de voyage ?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous dès maintenant et découvrez comment AeroFlow peut transformer vos passages à l'aéroport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="outline" size="lg" className="border-white text-aero-primary hover:bg-white/10">
                  S'inscrire gratuitement
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="border-white text-aero-primary hover:bg-white/10">
                  Se connecter
                </Button>
              </Link>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 max-w-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 max-w-full"></div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-sky-50 text-foreground pt-12 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <Link to="/" className="flex items-center gap-2 text-aero-primary mb-4">
                  <QrCode className="h-6 w-6" />
                  <span className="font-display text-xl font-bold">AeroFlow</span>
                </Link>
                <p className="text-muted-foreground">
                  La solution innovante pour un passage facilité à l'aéroport.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Liens utiles</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="hover:text-aero-primary transition-colors">Accueil</Link></li>
                  <li><Link to="/about" className="hover:text-aero-primary transition-colors">Comment ça marche</Link></li>
                  <li><Link to="/login" className="hover:text-aero-primary transition-colors">Se connecter</Link></li>
                  <li><Link to="/register" className="hover:text-aero-primary transition-colors">S'inscrire</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Informations légales</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="hover:text-aero-primary transition-colors">Confidentialité</Link></li>
                  <li><Link to="/terms" className="hover:text-aero-primary transition-colors">Conditions d'utilisation</Link></li>
                  <li><Link to="/cookies" className="hover:text-aero-primary transition-colors">Politique des cookies</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>support@aero-flow-pass.com</li>
                  <li>Téléphone: +33 1 23 45 67 89</li>
                  <li>Adresse: 1 Rue de l'Aéroport, 75000 Paris</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-sky-200">
              <p className="text-sm text-center text-muted-foreground">
                {new Date().getFullYear()} AeroFlow. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AboutPage;
