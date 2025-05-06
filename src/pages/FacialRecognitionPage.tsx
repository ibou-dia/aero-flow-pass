import React, { useState, useRef, useEffect } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Camera, CheckCircle, AlertCircle, RefreshCcw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const FacialRecognitionPage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [captureState, setCaptureState] = useState<'instructions' | 'capturing' | 'processing' | 'success' | 'error'>('instructions');
  const [countdown, setCountdown] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { toast } = useToast();
  
  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      
      setCaptureState('capturing');
      startCountdown();
    } catch (error) {
      console.error('Erreur lors de l\'accès à la caméra:', error);
      toast({
        variant: "destructive",
        title: "Erreur d'accès à la caméra",
        description: "Veuillez autoriser l'accès à votre caméra pour utiliser cette fonctionnalité.",
      });
      setCaptureState('error');
    }
  };

  const startCountdown = () => {
    setCountdown(3);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (countdown !== null) {
      if (countdown > 0) {
        timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      } else {
        captureImage();
      }
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown]);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw video frame to canvas
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert to data URL (base64)
      // const imageData = canvas.toDataURL('image/jpeg');
      
      // Stop the camera stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      
      // Simulate processing 
      setCaptureState('processing');
      
      // Simulate API call for facial recognition
      setTimeout(() => {
        // 80% chance of success for demo purposes
        const isSuccess = Math.random() < 0.8;
        
        if (isSuccess) {
          setCaptureState('success');
          toast({
            title: "Visage enregistré avec succès",
            description: "Votre visage a été correctement enregistré dans notre système.",
          });
        } else {
          setCaptureState('error');
          toast({
            variant: "destructive",
            title: "Échec de l'enregistrement",
            description: "Nous n'avons pas pu reconnaître votre visage. Veuillez réessayer avec un meilleur éclairage.",
          });
        }
      }, 2000);
    }
  };

  const resetProcess = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    setCaptureState('instructions');
    setCountdown(null);
  };

  return (
    <div className="min-h-screen flex bg-sky-50">
      <DashboardSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader toggleSidebar={toggleSidebar} title="Reconnaissance Faciale" />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Enregistrement biométrique</h2>
            <p className="text-muted-foreground">
              Enregistrez votre visage pour un passage automatisé aux contrôles
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle>Reconnaissance faciale</CardTitle>
                <CardDescription>
                  Cette fonctionnalité vous permet de passer rapidement les contrôles grâce à la biométrie
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-col items-center p-6">
                {captureState === 'instructions' && (
                  <div className="text-center space-y-4 mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-sky-100 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-aero-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Prêt pour la capture d'image ?</h3>
                    <p className="text-muted-foreground">
                      Assurez-vous d'être dans un endroit bien éclairé et regardez directement la caméra.
                    </p>
                    
                    <div className="bg-sky-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Conseils pour une meilleure reconnaissance :</h4>
                      <ul className="text-sm space-y-1 text-left ml-5 list-disc">
                        <li>Assurez-vous que votre visage est bien éclairé</li>
                        <li>Enlevez vos lunettes, chapeau ou tout accessoire</li>
                        <li>Regardez directement la caméra</li>
                        <li>Gardez une expression neutre</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {(captureState === 'capturing' || captureState === 'processing') && (
                  <div className="relative">
                    <div className="w-full max-w-md aspect-video bg-black rounded-lg overflow-hidden">
                      <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline 
                        muted 
                        className="w-full h-full object-cover"
                      />
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                    
                    {countdown !== null && countdown > 0 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">{countdown}</span>
                        </div>
                      </div>
                    )}
                    
                    {captureState === 'processing' && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-3 items-center justify-center rounded-lg">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        <p className="text-white font-medium">Analyse en cours...</p>
                      </div>
                    )}
                  </div>
                )}
                
                {captureState === 'success' && (
                  <div className="text-center space-y-4 w-full">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-green-700">Enregistrement réussi !</h3>
                    <p className="text-muted-foreground">
                      Votre visage a été enregistré avec succès dans notre système.
                    </p>
                    
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertTitle>Activation complète</AlertTitle>
                      <AlertDescription>
                        Vous pouvez maintenant utiliser les portes à reconnaissance faciale dans les aéroports partenaires.
                      </AlertDescription>
                    </Alert>
                  </div>
                )}
                
                {captureState === 'error' && (
                  <div className="text-center space-y-4 w-full">
                    <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                      <AlertCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-medium text-red-700">Échec de l'enregistrement</h3>
                    <p className="text-muted-foreground">
                      Nous n'avons pas pu enregistrer votre visage. Veuillez réessayer.
                    </p>
                    
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Problème détecté</AlertTitle>
                      <AlertDescription>
                        Assurez-vous d'être dans un environnement bien éclairé et de faire face à la caméra.
                      </AlertDescription>
                    </Alert>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="flex justify-center p-6">
                {captureState === 'instructions' && (
                  <Button 
                    onClick={startCamera}
                    className="w-full md:w-auto flex items-center gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    Commencer la capture
                  </Button>
                )}
                
                {(captureState === 'success' || captureState === 'error') && (
                  <Button 
                    onClick={resetProcess}
                    variant={captureState === 'error' ? "default" : "outline"}
                    className="w-full md:w-auto flex items-center gap-2"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    {captureState === 'error' ? "Réessayer" : "Recommencer"}
                  </Button>
                )}
                
                {captureState === 'capturing' && (
                  <Button 
                    onClick={resetProcess}
                    variant="outline"
                    className="w-full md:w-auto"
                  >
                    Annuler
                  </Button>
                )}
              </CardFooter>
            </Card>
            
            <div className="mt-8 p-6 bg-sky-100 rounded-lg animate-fade-in">
              <h3 className="font-semibold text-lg mb-3">Comment ça fonctionne ?</h3>
              <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
                <li>Nous capturons une image de votre visage en toute sécurité</li>
                <li>Notre système analyse les caractéristiques biométriques uniques</li>
                <li>Ces données sont cryptées et stockées de façon sécurisée</li>
                <li>Lors de votre passage à l'aéroport, les caméras reconnaissent automatiquement votre visage</li>
                <li>Vous passez les contrôles sans présenter de documents physiques</li>
              </ol>
              
              <div className="mt-6 p-4 bg-white rounded border border-sky-200">
                <h4 className="font-medium mb-2 flex items-center">
                  <span className="w-4 h-4 bg-aero-primary rounded-full mr-2"></span>
                  Confidentialité et sécurité
                </h4>
                <p className="text-sm text-muted-foreground">
                  Vos données biométriques sont protégées selon les normes les plus strictes. 
                  Elles ne sont utilisées que pour faciliter votre passage aux contrôles et 
                  ne sont jamais partagées avec des tiers. Vous pouvez demander leur suppression à tout moment.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FacialRecognitionPage;
