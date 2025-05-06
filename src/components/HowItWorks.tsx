
import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Inscription et pré-enregistrement',
    description: 'Créez un compte et complétez le formulaire avec vos informations personnelles et de voyage.'
  },
  {
    number: '02',
    title: 'Téléversement de documents',
    description: 'Téléchargez votre passeport, visa et billet d'avion pour vérification.'
  },
  {
    number: '03',
    title: 'Activation biométrique (optionnelle)',
    description: 'Prenez une photo de votre visage pour activer la reconnaissance faciale.'
  },
  {
    number: '04',
    title: 'Validation et obtention du QR code',
    description: 'Une fois vos documents validés, recevez votre QR code unique à présenter à l'aéroport.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Comment ça marche</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Un processus simple en 4 étapes pour faciliter votre passage à l'aéroport
        </p>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-aero-primary text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 ml-8 h-16 w-0.5 bg-sky-200" style={{ top: `${(index + 1) * 92 + 32}px` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
