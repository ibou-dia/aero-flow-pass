import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, Search, Send, Phone, Mail, MessageSquare } from 'lucide-react';

const HelpPage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageText, setMessageText] = useState('');
  
  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const faqItems = [
    {
      question: "Comment fonctionne la reconnaissance faciale ?",
      answer: "Notre technologie de reconnaissance faciale utilise un scan sécurisé de votre visage pour créer un modèle biométrique unique. Lors de votre passage à l'aéroport, vous n'aurez qu'à vous présenter devant la caméra aux points de contrôle pour être identifié automatiquement. Cela vous permet de passer les contrôles sans présenter de documents physiques, accélérant ainsi le processus d'embarquement."
    },
    {
      question: "Mes données biométriques sont-elles en sécurité ?",
      answer: "Oui, la sécurité de vos données est notre priorité absolue. Vos données biométriques sont cryptées selon les normes les plus strictes et stockées de manière sécurisée. Elles ne sont utilisées que pour faciliter votre passage aux contrôles et ne sont jamais partagées avec des tiers. Vous pouvez demander leur suppression à tout moment dans les paramètres de votre compte."
    },
    {
      question: "Comment utiliser mon QR code à l'aéroport ?",
      answer: "Lors de votre arrivée à l'aéroport, présentez votre QR code aux bornes automatiques ou aux agents aux points de contrôle. Vous pouvez afficher votre QR code directement depuis notre application mobile, ou l'imprimer à l'avance. Si vous avez activé la reconnaissance faciale, vous pouvez également vous diriger vers les portes automatiques équipées de caméras pour un passage encore plus rapide."
    },
    {
      question: "Que faire si j'ai perdu mon QR code ?",
      answer: "Ne vous inquiétez pas. Vous pouvez toujours accéder à votre QR code en vous connectant à votre compte sur notre site web ou application mobile. Si vous n'avez pas accès à Internet, présentez-vous à un comptoir d'assistance à l'aéroport avec une pièce d'identité valide, et un agent pourra réimprimer votre QR code."
    },
    {
      question: "Combien de temps avant mon vol dois-je effectuer le pré-enregistrement ?",
      answer: "Nous recommandons d'effectuer votre pré-enregistrement au moins 24 heures avant votre vol. Cela laisse suffisamment de temps pour traiter vos informations et résoudre tout problème potentiel. Vous pouvez néanmoins effectuer votre pré-enregistrement jusqu'à 3 heures avant le départ du vol, mais cela ne garantit pas un traitement à temps pour utiliser toutes nos fonctionnalités."
    },
    {
      question: "Dans quels aéroports puis-je utiliser ce service ?",
      answer: "Notre service est actuellement disponible dans plus de 50 aéroports internationaux, dont Paris Charles de Gaulle, New York JFK, London Heathrow, Dubai International, Tokyo Haneda, et bien d'autres. La liste complète des aéroports partenaires est disponible dans la section 'Aéroports partenaires' de notre application."
    },
    {
      question: "Que faire si mes informations de vol changent ?",
      answer: "Si vos informations de vol changent, vous pouvez facilement les mettre à jour en vous connectant à votre compte et en accédant à la section 'Informations de vol'. Mettez à jour les détails et sauvegardez. Votre QR code sera automatiquement mis à jour avec les nouvelles informations. Assurez-vous de faire ces modifications au moins 3 heures avant votre vol."
    },
    {
      question: "Le service est-il disponible pour les mineurs ?",
      answer: "Oui, les mineurs peuvent utiliser notre service, mais avec certaines restrictions. Les mineurs de moins de 16 ans doivent être accompagnés d'un adulte qui a également effectué un pré-enregistrement. Pour la reconnaissance faciale, seuls les mineurs de plus de 12 ans peuvent l'utiliser, et une autorisation parentale est requise pour les mineurs de moins de 18 ans."
    },
    {
      question: "Comment puis-je désactiver la reconnaissance faciale ?",
      answer: "Vous pouvez désactiver la reconnaissance faciale à tout moment dans les paramètres de votre compte, section 'Sécurité et confidentialité'. Une fois désactivée, vos données biométriques seront immédiatement supprimées de nos systèmes. Vous pourrez toujours utiliser votre QR code pour passer les contrôles."
    }
  ];

  const filteredFAQs = searchQuery 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems;

  const handleSendMessage = () => {
    if (messageText.trim()) {
      alert("Votre message a été envoyé à notre équipe. Nous vous répondrons dans les plus brefs délais.");
      setMessageText('');
    }
  };

  return (
    <div className="min-h-screen flex bg-sky-50">
      <DashboardSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} title="Aide et support" />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Centre d'aide</h2>
            <p className="text-muted-foreground">
              Trouvez des réponses à vos questions et contactez notre support
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="relative mb-6">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Rechercher dans la FAQ..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    
                    {filteredFAQs.length > 0 ? (
                      <Accordion type="single" collapsible className="w-full">
                        {filteredFAQs.map((item, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <div className="text-center py-8">
                        <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-3" />
                        <h3 className="text-lg font-medium mb-1">Aucun résultat trouvé</h3>
                        <p className="text-muted-foreground">
                          Essayez de modifier votre recherche ou contactez notre support
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="contact" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-6 rounded-lg border shadow-sm">
                        <Phone className="h-10 w-10 text-aero-primary mb-4" />
                        <h3 className="text-lg font-medium mb-2">Support téléphonique</h3>
                        <p className="text-muted-foreground mb-3">
                          Disponible 7j/7 de 8h à 20h
                        </p>
                        <p className="font-medium">+33 (0)1 23 45 67 89</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg border shadow-sm">
                        <Mail className="h-10 w-10 text-aero-primary mb-4" />
                        <h3 className="text-lg font-medium mb-2">Email</h3>
                        <p className="text-muted-foreground mb-3">
                          Réponse sous 24h ouvrées
                        </p>
                        <p className="font-medium">support@aero-flow-pass.com</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border shadow-sm">
                      <div className="flex items-center mb-4">
                        <MessageSquare className="h-6 w-6 text-aero-primary mr-2" />
                        <h3 className="text-lg font-medium">Envoyez-nous un message</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <Input placeholder="Votre nom" />
                        <Input placeholder="Votre email" type="email" />
                        <Input placeholder="Sujet" />
                        <div className="relative">
                          <textarea 
                            className="min-h-32 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Votre message..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                          ></textarea>
                        </div>
                        <Button onClick={handleSendMessage} className="w-full sm:w-auto flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Envoyer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="guides" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-sky-50 rounded-lg p-6 border border-sky-100">
                        <div className="w-12 h-12 bg-aero-primary rounded-full flex items-center justify-center text-white mb-4">
                          <span className="text-xl font-medium">1</span>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Guide de pré-enregistrement</h3>
                        <p className="text-muted-foreground mb-4">
                          Apprenez comment compléter votre pré-enregistrement rapidement et correctement.
                        </p>
                        <Button variant="secondary">Voir le guide</Button>
                      </div>
                      
                      <div className="bg-sky-50 rounded-lg p-6 border border-sky-100">
                        <div className="w-12 h-12 bg-aero-primary rounded-full flex items-center justify-center text-white mb-4">
                          <span className="text-xl font-medium">2</span>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Configuration de la reconnaissance faciale</h3>
                        <p className="text-muted-foreground mb-4">
                          Découvrez comment configurer la reconnaissance faciale pour un passage fluide.
                        </p>
                        <Button variant="secondary">Voir le guide</Button>
                      </div>
                      
                      <div className="bg-sky-50 rounded-lg p-6 border border-sky-100">
                        <div className="w-12 h-12 bg-aero-primary rounded-full flex items-center justify-center text-white mb-4">
                          <span className="text-xl font-medium">3</span>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Utilisation du QR Code</h3>
                        <p className="text-muted-foreground mb-4">
                          Tout ce que vous devez savoir sur l'utilisation de votre QR code à l'aéroport.
                        </p>
                        <Button variant="secondary">Voir le guide</Button>
                      </div>
                      
                      <div className="bg-sky-50 rounded-lg p-6 border border-sky-100">
                        <div className="w-12 h-12 bg-aero-primary rounded-full flex items-center justify-center text-white mb-4">
                          <span className="text-xl font-medium">4</span>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Guide des aéroports partenaires</h3>
                        <p className="text-muted-foreground mb-4">
                          Liste des aéroports où vous pouvez utiliser notre service et leurs spécificités.
                        </p>
                        <Button variant="secondary">Voir le guide</Button>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-aero-primary text-white p-6 rounded-lg">
                      <h3 className="text-lg font-medium mb-3">Vidéos tutorielles</h3>
                      <p className="opacity-90 mb-4">
                        Découvrez nos vidéos explicatives pour mieux comprendre nos services
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-black bg-opacity-20 rounded p-2 aspect-video flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                          <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                        <div className="bg-black bg-opacity-20 rounded p-2 aspect-video flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                          <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                        <div className="bg-black bg-opacity-20 rounded p-2 aspect-video flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                          <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                            <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default HelpPage;
