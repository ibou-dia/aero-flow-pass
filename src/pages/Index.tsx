
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
        
        <section className="py-16 bg-aero-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à simplifier votre voyage ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Créez votre compte gratuitement et commencez dès maintenant votre pré-enregistrement pour votre prochain vol.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-aero-primary hover:bg-sky-100 transition-colors">
                S'inscrire gratuitement
              </Button>
            </Link>
          </div>
        </section>
        
        <TestimonialSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
