
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { QrCode } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-aero-primary"
        >
          <QrCode className="h-6 w-6" />
          <span className="font-display text-xl font-bold">Aero<span className="text-aero-secondary">Flow</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-aero-primary transition-colors">
            Accueil
          </Link>
          <Link to="/about" className="text-foreground hover:text-aero-primary transition-colors">
            Comment ça marche
          </Link>
          <Link to="/dashboard" className="text-foreground hover:text-aero-primary transition-colors">
            Mon espace
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm">Se connecter</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-aero-primary hover:bg-aero-dark" size="sm">S'inscrire</Button>
          </Link>
        </div>

        {/* Mobile button */}
        <button 
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <Link to="/" className="text-foreground hover:text-aero-primary py-2 transition-colors">
            Accueil
          </Link>
          <Link to="/about" className="text-foreground hover:text-aero-primary py-2 transition-colors">
            Comment ça marche
          </Link>
          <Link to="/dashboard" className="text-foreground hover:text-aero-primary py-2 transition-colors">
            Mon espace
          </Link>
          <hr className="my-2" />
          <div className="flex flex-col gap-2">
            <Link to="/login">
              <Button variant="outline" className="w-full">Se connecter</Button>
            </Link>
            <Link to="/register">
              <Button className="w-full bg-aero-primary hover:bg-aero-dark">S'inscrire</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
