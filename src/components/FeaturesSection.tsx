
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Check } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Économisez du temps',
    description: "Réduisez votre temps d'attente aux contrôles de sécurité grâce à la vérification anticipée de vos documents."
  },
  {
    icon: Shield,
    title: 'Sécurité renforcée',
    description: "Authentification biométrique et QR code sécurisé pour garantir votre identité tout au long de votre parcours."
  },
  {
    icon: Check,
    title: 'Simplicité maximale',
    description: "Une interface intuitive et un processus en quelques étapes pour préparer votre voyage en toute sérénité."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Une expérience de voyage améliorée</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <Card className="card-gradient hover-card rounded-xl h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-aero-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
