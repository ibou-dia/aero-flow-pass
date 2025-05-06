
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialSection from '@/components/TestimonialSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <TestimonialSection />
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
        
        
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
