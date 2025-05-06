
import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sky-50 text-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-aero-primary mb-4">
              <QrCode className="h-6 w-6" />
              <span className="font-display text-xl font-bold">Aero<span className="text-aero-secondary">Flow</span></span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Solution innovante de fluidification du passage à l'aéroport.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-base mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-aero-primary transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-aero-primary transition-colors">Comment ça marche</Link></li>
              <li><Link to="/dashboard" className="hover:text-aero-primary transition-colors">Mon espace</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-base mb-4">Informations légales</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-aero-primary transition-colors">Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" className="hover:text-aero-primary transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/legal" className="hover:text-aero-primary transition-colors">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-base mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@aeroflow.com</li>
              <li>Téléphone: +33 1 23 45 67 89</li>
              <li>Adresse: 1 Rue de l'Aéroport, 75000 Paris</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-sky-200">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} AeroFlow. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
