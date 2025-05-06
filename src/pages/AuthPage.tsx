
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type AuthType = 'login' | 'register';

const AuthPage = ({ type = 'login' }: { type?: AuthType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler une authentification
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (type === 'login') {
        toast({
          title: "Connexion réussie",
          description: "Vous êtes maintenant connecté à votre compte.",
        });
      } else {
        toast({
          title: "Compte créé avec succès",
          description: "Votre compte a été créé. Vous pouvez maintenant vous connecter.",
        });
      }
    }, 1500);
  };

  const handleGuest = () => {
    toast({
      title: "Mode invité activé",
      description: "Vous utilisez l'application en tant qu'invité.",
    });
    // Rediriger vers le dashboard
  };

  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container px-4">
          <div className="max-w-md mx-auto animate-fade-in">
            <Tabs defaultValue={type} className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="login" asChild>
                  <Link to="/login">Se connecter</Link>
                </TabsTrigger>
                <TabsTrigger value="register" asChild>
                  <Link to="/register">S'inscrire</Link>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                      <QrCode className="h-6 w-6 text-aero-primary" />
                    </div>
                    <CardTitle>Connexion</CardTitle>
                    <CardDescription>
                      Connectez-vous pour accéder à votre espace personnel.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="votreemail@exemple.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Mot de passe</Label>
                          <Link to="/reset-password" className="text-sm text-aero-primary hover:underline">
                            Mot de passe oublié ?
                          </Link>
                        </div>
                        <Input 
                          id="password" 
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-aero-primary hover:bg-aero-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Connexion en cours...' : 'Se connecter'}
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <div className="relative w-full">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-sky-50 px-2 text-muted-foreground">
                          ou
                        </span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleGuest}
                    >
                      Continuer sans compte
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="register">
                <Card className="glass-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                      <QrCode className="h-6 w-6 text-aero-primary" />
                    </div>
                    <CardTitle>Création de compte</CardTitle>
                    <CardDescription>
                      Inscrivez-vous pour accéder à tous nos services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input 
                          id="name" 
                          type="text"
                          placeholder="Prénom Nom"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <Input 
                          id="register-email" 
                          type="email"
                          placeholder="votreemail@exemple.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Mot de passe</Label>
                        <Input 
                          id="register-password" 
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          Minimum 8 caractères avec au moins une majuscule et un chiffre
                        </p>
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-aero-primary hover:bg-aero-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Création en cours...' : 'Créer un compte'}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        En créant un compte, vous acceptez nos{' '}
                        <Link to="/terms" className="text-aero-primary hover:underline">
                          conditions d'utilisation
                        </Link>{' '}
                        et notre{' '}
                        <Link to="/privacy" className="text-aero-primary hover:underline">
                          politique de confidentialité
                        </Link>.
                      </p>
                    </form>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <div className="relative w-full">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-sky-50 px-2 text-muted-foreground">
                          ou
                        </span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleGuest}
                    >
                      Continuer sans compte
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthPage;
