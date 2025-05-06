
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
import BiometricStep from './steps/BiometricStep';
import SummaryStep from './steps/SummaryStep';

// La forme simplifiée du schéma
const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Format de date incorrect"),
  nationality: z.string().min(2, "Veuillez sélectionner votre nationalité"),
  email: z.string().email("Format d'email incorrect"),
  phone: z.string().min(10, "Numéro de téléphone incorrect"),
  passportNumber: z.string().min(5, "Numéro de passeport incorrect"),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions d'utilisation",
  }),
});

type RegistrationFormValues = z.infer<typeof formSchema>;

const steps = [
  { id: 'personal', title: 'Informations personnelles' },
  { id: 'documents', title: 'Documents de voyage' },
  { id: 'biometric', title: 'Vérification biométrique' },
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
      acceptTerms: false,
    },
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
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
        // Redirection vers la page de QR code ou de statut
      }, 2000);
    } else {
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
        return <BiometricStep />;
      case 3:
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  type="submit"
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
