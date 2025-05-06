
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Check } from 'lucide-react';

interface SummaryStepProps {
  formData: any;
}

const SummaryStep = ({ formData }: SummaryStepProps) => {
  return (
    <div className="space-y-6 form-step active">
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium">Récapitulatif</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Vérifiez les informations avant de soumettre votre pré-enregistrement
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-medium mb-4">Informations personnelles</h4>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
              <div>
                <dt className="text-sm text-muted-foreground">Nom complet</dt>
                <dd className="font-medium">
                  {formData.firstName} {formData.lastName || 'Dupont'}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Date de naissance</dt>
                <dd className="font-medium">{formData.birthDate || '1990-01-01'}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Nationalité</dt>
                <dd className="font-medium">{formData.nationality || 'France'}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Numéro de passeport</dt>
                <dd className="font-medium">{formData.passportNumber || '123456789'}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd className="font-medium">{formData.email || 'exemple@email.com'}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Téléphone</dt>
                <dd className="font-medium">{formData.phone || '+33 6 12 34 56 78'}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h4 className="font-medium mb-4">Documents</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <span className="font-medium">Passeport</span>
                <span className="text-sm text-muted-foreground ml-auto">passport.jpg</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <span className="font-medium">Billet d'avion</span>
                <span className="text-sm text-muted-foreground ml-auto">PNR: AB1234</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-sky-100 flex items-center justify-center opacity-50">
                  <Check className="h-4 w-4 text-aero-primary" />
                </div>
                <span className="font-medium text-muted-foreground">Vérification biométrique</span>
                <span className="text-sm text-muted-foreground ml-auto">Activée</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-sky-50 p-4 rounded-lg flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
            <Shield className="h-5 w-5 text-aero-primary" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Protection de vos données</h4>
            <p className="text-sm text-muted-foreground">
              Vos informations personnelles et documents sont chiffrés et stockés en toute sécurité.
              Ils ne sont utilisés que pour faciliter votre passage à l'aéroport.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="accept-terms" required />
          <Label htmlFor="accept-terms" className="text-sm leading-normal">
            J'accepte les <a href="/terms" className="text-aero-primary hover:underline">conditions d'utilisation</a> et 
            la <a href="/privacy" className="text-aero-primary hover:underline">politique de confidentialité</a>. 
            J'autorise le traitement de mes données personnelles pour faciliter mon passage à l'aéroport.
          </Label>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;
