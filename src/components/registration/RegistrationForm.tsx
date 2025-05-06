import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import PersonalInfoStep from './steps/PersonalInfoStep';
import DocumentsUploadStep from './steps/DocumentsUploadStep';
import FlightInfoStep from './steps/FlightInfoStep';
import BiometricStep from './steps/BiometricStep';
import SummaryStep from './steps/SummaryStep';

// Schéma de formulaire avec tous les champs optionnels pour pouvoir naviguer librement
const formSchema = z.object({
  // Informations personnelles
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  birthDate: z.string().optional(),
  nationality: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  
  // Documents de voyage
  passportNumber: z.string().optional(),
  
  // Informations de vol
  flightNumber: z.string().optional(),
  airline: z.string().optional(),
  departureDate: z.string().optional(),
  departureAirport: z.string().optional(),
  destinationAirport: z.string().optional(),
  travelPurpose: z.string().optional(),
  
  // Termes et conditions
  acceptTerms: z.boolean().optional(),
});

type RegistrationFormValues = z.infer<typeof formSchema>;

const steps = [
  { id: 'personal', title: 'Informations personnelles' },
  { id: 'documents', title: 'Documents de voyage' },
  { id: 'flight', title: 'Informations de vol' },
  { id: 'biometric', title: 'Biométrie' },
  { id: 'summary', title: 'Récapitulatif' },
];

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      birthDate: '',
      nationality: '',
      email: '',
      phone: '',
      passportNumber: '',
      flightNumber: '',
      airline: '',
      departureDate: '',
      departureAirport: '',
      destinationAirport: '',
      travelPurpose: '',
      acceptTerms: false,
    },
    // Désactiver la validation lors de la soumission
    mode: 'onSubmit',
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      // Enregistrer les données du formulaire sans validation
      form.trigger().catch(() => {
        // Ignorer les erreurs de validation
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: RegistrationFormValues) => {
    if (currentStep === steps.length - 1) {
      setIsSubmitting(true);
      // Simuler l'envoi des données
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Pré-enregistrement soumis",
          description: "Votre pré-enregistrement a été envoyé avec succès.",
        });
        // Redirection vers la page de QR code
        window.location.href = "/dashboard/qrcode";
      }, 2000);
    } else {
      // Passer directement à l'étape suivante sans validation
      nextStep();
    }
  };

  // Modification pour permettre de contourner la validation du formulaire
  const handleNextClick = () => {
    if (currentStep === steps.length - 1) {
      // Si on est à la dernière étape, on soumet le formulaire normalement
      form.handleSubmit(onSubmit)();
    } else {
      // Sinon, on passe directement à l'étape suivante sans validation
      nextStep();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep form={form} />;
      case 1:
        return <DocumentsUploadStep />;
      case 2:
        return <FlightInfoStep form={form} />;
      case 3:
        return <BiometricStep />;
      case 4:
        return <SummaryStep formData={form.getValues()} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div 
                className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-sm ${
                  index <= currentStep ? 'bg-aero-primary text-white' : 'bg-sky-100 text-muted-foreground'
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="step-indicator mx-2">
                  <div className={`step-progress ${index < currentStep ? 'w-full' : 'w-0'}`}></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((step, index) => (
            <div 
              key={`label-${step.id}`}
              className={`text-xs ${
                index <= currentStep ? 'text-aero-primary font-medium' : 'text-muted-foreground'
              }`}
              style={{ width: `${100 / steps.length}%`, textAlign: index === 0 ? 'left' : index === steps.length - 1 ? 'right' : 'center' }}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-white">
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={(e) => { e.preventDefault(); handleNextClick(); }} className="space-y-6">
              <div className="min-h-[400px]">
                {renderStepContent()}
              </div>

              <div className="flex justify-between pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                >
                  Précédent
                </Button>
                <Button
                  type="button"
                  onClick={handleNextClick}
                  className="bg-aero-primary hover:bg-aero-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? 'Envoi en cours...' 
                    : currentStep === steps.length - 1 
                      ? 'Soumettre' 
                      : 'Suivant'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
