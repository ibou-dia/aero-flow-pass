
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Grâce à AeroFlow, j'ai gagné plus de 30 minutes lors de mon dernier voyage. Le processus était vraiment simple et rapide !",
    author: "Marie L.",
    role: "Voyageuse fréquente"
  },
  {
    quote: "La reconnaissance faciale fonctionne parfaitement. J'apprécie particulièrement de ne plus avoir à sortir mes documents à chaque contrôle.",
    author: "Thomas D.",
    role: "Homme d'affaires"
  },
  {
    quote: "Avec trois enfants, passer rapidement les contrôles est un vrai soulagement. AeroFlow a changé notre façon de voyager en famille.",
    author: "Sophie M.",
    role: "Mère de famille"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ils ont utilisé AeroFlow</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Découvrez les témoignages de nos utilisateurs satisfaits
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <Card className="h-full hover-card bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.59 4.59A2 2 0 1 1 11 8H9.5C8.67 8 8 8.67 8 9.5V11h2v2H6V9a4 4 0 0 1 3.59-4.41z" fill="#0ea5e9" />
                      <path d="M15.59 4.59A2 2 0 1 1 17 8h-1.5c-.83 0-1.5.67-1.5 1.5V11h2v2h-4V9a4 4 0 0 1 3.59-4.41z" fill="#0ea5e9" />
                    </svg>
                  </div>
                  <p className="text-center italic mb-6">{testimonial.quote}</p>
                  <div className="text-center">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
