
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { QrCode, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-gradient py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aero-dark">
              Passez les contrôles d'aéroport <span className="text-aero-primary">sans attente</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Pré-enregistrez vos documents de voyage en ligne et obtenez un QR code sécurisé 
              pour un passage fluide et rapide aux contrôles aéroportuaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="w-full sm:w-auto bg-aero-primary hover:bg-aero-dark text-white 
                  font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                  S'inscrire gratuitement
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="w-full sm:w-auto">
                  Comment ça marche
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-3/4 aspect-square relative animate-float">
              <div className="absolute inset-0 bg-sky-500 rounded-full opacity-10 animate-pulse-slow"></div>
              <div className="glass-card absolute inset-4 rounded-3xl flex items-center justify-center">
                <QrCode className="w-1/2 h-1/2 text-aero-primary opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
