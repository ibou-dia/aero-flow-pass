import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { User, Lock, Bell, LogOut, Upload, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const profileFormSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide" }),
  nationality: z.string().min(1, { message: "Veuillez sélectionner une nationalité" }),
  passportNumber: z.string().min(5, { message: "Numéro de passeport invalide" }),
  passportExpiry: z.string().min(1, { message: "Date d'expiration invalide" }),
})

const securityFormSchema = z.object({
  currentPassword: z.string().min(8, { message: "Mot de passe invalide" }),
  newPassword: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
  confirmPassword: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
})

const notificationFormSchema = z.object({
  emailNotifs: z.boolean().default(true),
  smsNotifs: z.boolean().default(true),
  flightUpdates: z.boolean().default(true),
  securityAlerts: z.boolean().default(true),
  marketingEmails: z.boolean().default(false),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type SecurityFormValues = z.infer<typeof securityFormSchema>;
type NotificationFormValues = z.infer<typeof notificationFormSchema>;

const ProfilePage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const { toast } = useToast();

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "Jean",
      lastName: "Dupont",
      email: "jean.dupont@example.com",
      phone: "+33 6 12 34 56 78",
      nationality: "FRANCE",
      passportNumber: "PAB123456",
      passportExpiry: "2028-05-15",
    },
  });

  const securityForm = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const notificationForm = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues: {
      emailNotifs: true,
      smsNotifs: true,
      flightUpdates: true,
      securityAlerts: true,
      marketingEmails: false,
    },
  });

  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const onSubmitProfile = (data: ProfileFormValues) => {
    // Simule la sauvegarde des données
    setTimeout(() => {
      console.log('Profile data:', data);
      setIsEditingProfile(false);
      toast({
        title: "Profil mis à jour",
        description: "Vos informations personnelles ont été mises à jour avec succès.",
      });
    }, 1000);
  };

  const onSubmitSecurity = (data: SecurityFormValues) => {
    // Simule la modification du mot de passe
    setTimeout(() => {
      console.log('Security data:', data);
      securityForm.reset({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      toast({
        title: "Mot de passe modifié",
        description: "Votre mot de passe a été modifié avec succès.",
      });
    }, 1000);
  };

  const onSubmitNotifications = (data: NotificationFormValues) => {
    // Simule la sauvegarde des préférences de notification
    setTimeout(() => {
      console.log('Notification preferences:', data);
      toast({
        title: "Préférences mises à jour",
        description: "Vos préférences de notification ont été mises à jour.",
      });
    }, 1000);
  };

  const handleAvatarUpload = () => {
    // Simule l'upload d'un avatar
    toast({
      title: "Upload de photo",
      description: "Cette fonctionnalité sera disponible prochainement.",
    });
  };

  const handleAccountDeletion = () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      toast({
        variant: "destructive",
        title: "Compte supprimé",
        description: "Votre compte a été supprimé avec succès.",
      });
      // Redirect to home page
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex bg-sky-50">
      <DashboardSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} title="Mon Profil" />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Informations personnelles</h2>
            <p className="text-muted-foreground">
              Gérez vos informations personnelles et préférences
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/images/avatar.jpg" alt="Jean Dupont" />
                    <AvatarFallback className="bg-aero-primary text-white text-xl">JD</AvatarFallback>
                  </Avatar>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white"
                    onClick={handleAvatarUpload}
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Jean Dupont</h3>
                  <p className="text-muted-foreground">jean.dupont@example.com</p>
                </div>
              </div>
              <div>
                <Button variant="outline" className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Déconnexion
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profil</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span className="hidden sm:inline">Sécurité</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Profil</CardTitle>
                        <CardDescription>
                          Gérez vos informations personnelles
                        </CardDescription>
                      </div>
                      <Button 
                        variant={isEditingProfile ? "outline" : "default"}
                        onClick={() => setIsEditingProfile(!isEditingProfile)}
                      >
                        {isEditingProfile ? "Annuler" : "Modifier"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Form {...profileForm}>
                      <form onSubmit={profileForm.handleSubmit(onSubmitProfile)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={profileForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Prénom</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={!isEditingProfile}
                                    className={!isEditingProfile ? "bg-gray-50" : ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={!isEditingProfile}
                                    className={!isEditingProfile ? "bg-gray-50" : ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={profileForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={!isEditingProfile}
                                    className={!isEditingProfile ? "bg-gray-50" : ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Téléphone</FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    disabled={!isEditingProfile}
                                    className={!isEditingProfile ? "bg-gray-50" : ""}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h4 className="text-sm font-medium mb-3">Documents de voyage</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                              control={profileForm.control}
                              name="nationality"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nationalité</FormLabel>
                                  <Select 
                                    onValueChange={field.onChange} 
                                    defaultValue={field.value}
                                    disabled={!isEditingProfile}
                                  >
                                    <FormControl>
                                      <SelectTrigger className={!isEditingProfile ? "bg-gray-50" : ""}>
                                        <SelectValue placeholder="Sélectionnez une nationalité" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="FRANCE">France</SelectItem>
                                      <SelectItem value="BELGIUM">Belgique</SelectItem>
                                      <SelectItem value="SWITZERLAND">Suisse</SelectItem>
                                      <SelectItem value="CANADA">Canada</SelectItem>
                                      <SelectItem value="OTHER">Autre</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={profileForm.control}
                              name="passportNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Numéro de passeport</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      disabled={!isEditingProfile}
                                      className={!isEditingProfile ? "bg-gray-50" : ""}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={profileForm.control}
                              name="passportExpiry"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Date d'expiration</FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="date"
                                      disabled={!isEditingProfile}
                                      className={!isEditingProfile ? "bg-gray-50" : ""}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        
                        {isEditingProfile && (
                          <div className="flex justify-end">
                            <Button type="submit">Enregistrer les modifications</Button>
                          </div>
                        )}
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Modification du mot de passe</CardTitle>
                    <CardDescription>
                      Mettez à jour votre mot de passe pour sécuriser votre compte
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...securityForm}>
                      <form onSubmit={securityForm.handleSubmit(onSubmitSecurity)} className="space-y-6">
                        <FormField
                          control={securityForm.control}
                          name="currentPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mot de passe actuel</FormLabel>
                              <FormControl>
                                <Input {...field} type="password" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={securityForm.control}
                            name="newPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nouveau mot de passe</FormLabel>
                                <FormControl>
                                  <Input {...field} type="password" />
                                </FormControl>
                                <FormDescription>
                                  Au moins 8 caractères avec des lettres et des chiffres
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={securityForm.control}
                            name="confirmPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Confirmer le mot de passe</FormLabel>
                                <FormControl>
                                  <Input {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit">Modifier le mot de passe</Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Authentification à deux facteurs</CardTitle>
                        <CardDescription>
                          Ajoutez une couche de sécurité supplémentaire à votre compte
                        </CardDescription>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          L'authentification à deux facteurs est activée. Un code de vérification 
                          vous sera envoyé par SMS lors de chaque connexion depuis un nouvel appareil.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Suppression du compte</CardTitle>
                    <CardDescription>
                      Cette action est irréversible et supprimera toutes vos données
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Alert variant="destructive" className="mb-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        La suppression de votre compte entraînera la perte définitive de toutes vos données, 
                        y compris votre profil, vos pré-enregistrements et vos données biométriques.
                      </AlertDescription>
                    </Alert>
                    <Button 
                      variant="destructive" 
                      onClick={handleAccountDeletion}
                    >
                      Supprimer mon compte
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Préférences de notification</CardTitle>
                    <CardDescription>
                      Configurez comment et quand vous souhaitez être notifié
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...notificationForm}>
                      <form onSubmit={notificationForm.handleSubmit(onSubmitNotifications)} className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Canaux de notification</h3>
                          <div className="grid gap-4">
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Notifications par email</FormLabel>
                                <FormDescription>
                                  Recevoir des notifications par email
                                </FormDescription>
                              </div>
                              <FormField
                                control={notificationForm.control}
                                name="emailNotifs"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Switch 
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <Separator />
                            
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Notifications par SMS</FormLabel>
                                <FormDescription>
                                  Recevoir des notifications par SMS
                                </FormDescription>
                              </div>
                              <FormField
                                control={notificationForm.control}
                                name="smsNotifs"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Switch 
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Types de notifications</h3>
                          <div className="grid gap-4">
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Mises à jour de vol</FormLabel>
                                <FormDescription>
                                  Notifications sur les changements d'horaire, de porte, etc.
                                </FormDescription>
                              </div>
                              <FormField
                                control={notificationForm.control}
                                name="flightUpdates"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Switch 
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <Separator />
                            
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Alertes de sécurité</FormLabel>
                                <FormDescription>
                                  Notifications sur les connexions à votre compte
                                </FormDescription>
                              </div>
                              <FormField
                                control={notificationForm.control}
                                name="securityAlerts"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Switch 
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <Separator />
                            
                            <div className="flex items-center justify-between">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Emails marketing</FormLabel>
                                <FormDescription>
                                  Offres promotionnelles et newsletters
                                </FormDescription>
                              </div>
                              <FormField
                                control={notificationForm.control}
                                name="marketingEmails"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Switch 
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit">Enregistrer les préférences</Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
