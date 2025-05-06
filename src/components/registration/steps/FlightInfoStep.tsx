import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';

interface FlightInfoStepProps {
  form: UseFormReturn<any>;
}

const FlightInfoStep = ({ form }: FlightInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Informations de vol</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Renseignez les détails de votre prochain vol pour compléter votre pré-enregistrement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="airline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Compagnie aérienne</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une compagnie" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="AIR_FRANCE">Air France</SelectItem>
                  <SelectItem value="KLM">KLM</SelectItem>
                  <SelectItem value="LUFTHANSA">Lufthansa</SelectItem>
                  <SelectItem value="BRITISH_AIRWAYS">British Airways</SelectItem>
                  <SelectItem value="EMIRATES">Emirates</SelectItem>
                  <SelectItem value="QATAR_AIRWAYS">Qatar Airways</SelectItem>
                  <SelectItem value="EASYJET">EasyJet</SelectItem>
                  <SelectItem value="RYANAIR">Ryanair</SelectItem>
                  <SelectItem value="OTHER">Autre</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="flightNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de vol</FormLabel>
              <FormControl>
                <Input placeholder="Ex: AF123" {...field} />
              </FormControl>
              <FormDescription>
                Le code de la compagnie suivi du numéro
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="departureDate"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Date de départ</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(new Date(field.value), "PPP", { locale: fr })
                    ) : (
                      <span>Sélectionnez une date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={(date) => field.onChange(date ? date.toISOString().split('T')[0] : '')}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  locale={fr}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="departureAirport"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aéroport de départ</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un aéroport" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CDG">Paris Charles de Gaulle (CDG)</SelectItem>
                  <SelectItem value="ORY">Paris Orly (ORY)</SelectItem>
                  <SelectItem value="LYS">Lyon Saint-Exupéry (LYS)</SelectItem>
                  <SelectItem value="NCE">Nice Côte d'Azur (NCE)</SelectItem>
                  <SelectItem value="MRS">Marseille Provence (MRS)</SelectItem>
                  <SelectItem value="TLS">Toulouse-Blagnac (TLS)</SelectItem>
                  <SelectItem value="BOD">Bordeaux-Mérignac (BOD)</SelectItem>
                  <SelectItem value="NTE">Nantes Atlantique (NTE)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="destinationAirport"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aéroport de destination</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un aéroport" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="JFK">New York JFK (JFK)</SelectItem>
                  <SelectItem value="LHR">Londres Heathrow (LHR)</SelectItem>
                  <SelectItem value="DXB">Dubaï (DXB)</SelectItem>
                  <SelectItem value="SIN">Singapour Changi (SIN)</SelectItem>
                  <SelectItem value="HND">Tokyo Haneda (HND)</SelectItem>
                  <SelectItem value="LAX">Los Angeles (LAX)</SelectItem>
                  <SelectItem value="FRA">Francfort (FRA)</SelectItem>
                  <SelectItem value="AMS">Amsterdam Schiphol (AMS)</SelectItem>
                  <SelectItem value="MAD">Madrid Barajas (MAD)</SelectItem>
                  <SelectItem value="BCN">Barcelone El Prat (BCN)</SelectItem>
                  <SelectItem value="FCO">Rome Fiumicino (FCO)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="travelPurpose"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Motif du voyage (optionnel)</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un motif" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="TOURISM">Tourisme</SelectItem>
                <SelectItem value="BUSINESS">Affaires</SelectItem>
                <SelectItem value="FAMILY">Visite familiale</SelectItem>
                <SelectItem value="EDUCATION">Études</SelectItem>
                <SelectItem value="MEDICAL">Médical</SelectItem>
                <SelectItem value="OTHER">Autre</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              Cette information nous aide à améliorer nos services
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FlightInfoStep;
