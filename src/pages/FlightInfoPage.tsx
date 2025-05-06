import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plane, CalendarIcon, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  flightNumber: z.string()
    .min(2, {message: 'Le numéro de vol doit comporter au moins 2 caractères'})
    .max(10, {message: 'Le numéro de vol ne peut pas dépasser 10 caractères'})
    .regex(/^[A-Z0-9]+$/, {message: 'Format invalide. Ex: AF123, EZY4567'}),
  airline: z.string({required_error: 'Veuillez sélectionner une compagnie aérienne'}),
  departureDate: z.date({required_error: 'Veuillez sélectionner une date de départ'}),
  departureAirport: z.string({required_error: 'Veuillez sélectionner un aéroport de départ'}),
  destinationAirport: z.string({required_error: 'Veuillez sélectionner un aéroport de destination'}),
  travelPurpose: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const FlightInfoPage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      flightNumber: '',
      airline: '',
      departureAirport: '',
      destinationAirport: '',
      travelPurpose: '',
    },
  });

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const onSubmit = (data: FormValues) => {
    setSubmissionStatus('submitting');
    
    // Simuler l'envoi des données au serveur
    setTimeout(() => {
      console.log('Flight Info submitted:', data);
      setSubmissionStatus('success');
      toast({
        title: "Informations de vol enregistrées",
        description: "Vos informations de vol ont été enregistrées avec succès.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-sky-50">
      <DashboardSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} title="Informations de vol" />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Détails de votre vol</h2>
            <p className="text-muted-foreground">
              Entrez les informations de votre prochain vol pour compléter votre pré-enregistrement
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {submissionStatus === 'success' ? (
              <Card className="bg-white shadow-lg animate-fade-in">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Informations enregistrées</h3>
                    <p className="text-muted-foreground mb-6">
                      Vos informations de vol ont été enregistrées avec succès.
                    </p>
                    
                    <div className="w-full p-6 bg-gray-50 rounded-lg mb-6">
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div>
                          <p className="text-sm text-muted-foreground">Numéro de vol</p>
                          <p className="font-medium">{form.getValues().flightNumber}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Compagnie</p>
                          <p className="font-medium">{form.getValues().airline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Date de départ</p>
                          <p className="font-medium">
                            {form.getValues().departureDate ? 
                              format(form.getValues().departureDate, 'PPP', { locale: fr }) : 
                              ''}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Motif du voyage</p>
                          <p className="font-medium">{form.getValues().travelPurpose || 'Non spécifié'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Départ</p>
                          <p className="font-medium">{form.getValues().departureAirport}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Destination</p>
                          <p className="font-medium">{form.getValues().destinationAirport}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Alert className="bg-sky-50 border-sky-200 mb-4">
                      <Plane className="h-4 w-4 text-aero-primary" />
                      <AlertDescription className="text-left">
                        Ces informations seront utilisées pour générer votre QR code de passage rapide et activer la reconnaissance faciale aux points de contrôle.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="flex gap-3">
                      <Button onClick={() => setSubmissionStatus('idle')} variant="outline">
                        Modifier
                      </Button>
                      <Button onClick={() => window.location.href = '/dashboard'}>
                        Retour au tableau de bord
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <Card className="bg-white shadow-lg animate-fade-in">
                    <CardHeader>
                      <CardTitle>Informations de vol</CardTitle>
                      <CardDescription>
                        Entrez les détails de votre prochain vol pour compléter votre pré-enregistrement
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
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
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP", { locale: fr })
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
                                  selected={field.value}
                                  onSelect={field.onChange}
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
                                  <SelectItem value="BDX">Bordeaux-Mérignac (BOD)</SelectItem>
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
                      
                      <Alert className="bg-amber-50 border-amber-200">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                        <AlertDescription>
                          Assurez-vous que les informations de vol correspondent exactement à celles de votre réservation.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={submissionStatus === 'submitting'}
                      >
                        {submissionStatus === 'submitting' ? (
                          <>
                            <span className="mr-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Enregistrement...
                          </>
                        ) : 'Enregistrer les informations'}
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              </Form>
            )}
            
            <div className="mt-8 p-6 bg-aero-primary text-white rounded-lg shadow animate-fade-in">
              <h3 className="font-semibold text-lg mb-3">Pourquoi ces informations sont-elles nécessaires ?</h3>
              <p className="opacity-90 mb-4">
                Les informations de vol nous permettent de :
              </p>
              <ul className="space-y-2 opacity-90">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-xs mt-0.5">1</span>
                  <span>Générer un QR code valide contenant toutes les informations nécessaires à votre passage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-xs mt-0.5">2</span>
                  <span>Préparer les systèmes biométriques pour votre arrivée à l'aéroport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-xs mt-0.5">3</span>
                  <span>Optimiser le processus d'embarquement selon l'affluence prévue</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FlightInfoPage;
