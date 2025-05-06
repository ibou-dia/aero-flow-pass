
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const BiometricStep = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [faceDetected, setFaceDetected] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      setIsCapturing(true);
      
      // Simuler la détection de visage après 2 secondes
      setTimeout(() => {
        setFaceDetected(true);
      }, 2000);
    } catch (err) {
      console.error("Erreur lors de l'accès à la webcam:", err);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL('image/png');
        setCapturedImage(imageDataUrl);
        
        // Arrêter le flux vidéo
        const stream = video.srcObject as MediaStream;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
        
        setIsCapturing(false);
      }
    }
  };

  const resetCapture = () => {
    setCapturedImage(null);
    setFaceDetected(false);
    setIsCapturing(false);
  };

  return (
    <div className="space-y-6 form-step active">
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium">Vérification biométrique (optionnelle)</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Prenez une photo de votre visage pour activer la reconnaissance faciale lors de votre passage à l'aéroport
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {capturedImage ? (
            <div className="relative aspect-video bg-black">
              <img 
                src={capturedImage} 
                alt="Captured" 
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {isCapturing ? (
                <>
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                  {faceDetected && (
                    <div className="absolute inset-0 border-4 border-green-500 animate-pulse pointer-events-none" />
                  )}
                </>
              ) : (
                <div className="text-white">
                  Cliquez sur "Activer la caméra" pour commencer
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="hidden">
        <canvas ref={canvasRef}></canvas>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {capturedImage ? (
          <>
            <div className="flex items-center gap-2 text-green-500">
              <Check className="h-5 w-5" />
              <span>Photo capturée avec succès</span>
            </div>
            <Button 
              type="button" 
              variant="outline" 
              onClick={resetCapture}
            >
              Prendre une nouvelle photo
            </Button>
          </>
        ) : (
          <>
            {isCapturing ? (
              <>
                {faceDetected && (
                  <div className="flex items-center gap-2 text-green-500">
                    <Check className="h-5 w-5" />
                    <span>Visage détecté</span>
                  </div>
                )}
                <div className="flex gap-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setIsCapturing(false)}
                  >
                    Annuler
                  </Button>
                  <Button 
                    type="button"
                    className="bg-aero-primary hover:bg-aero-dark"
                    onClick={captureImage}
                    disabled={!faceDetected}
                  >
                    Capturer la photo
                  </Button>
                </div>
              </>
            ) : (
              <Button 
                type="button"
                onClick={startCamera}
              >
                Activer la caméra
              </Button>
            )}
          </>
        )}
      </div>

      <div className="bg-sky-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Pourquoi activer la biométrie ?</h4>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-aero-primary flex-shrink-0 mt-0.5" />
            <span>Passage plus rapide aux contrôles avec les e-gates</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-aero-primary flex-shrink-0 mt-0.5" />
            <span>Aucun contact physique nécessaire</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-aero-primary flex-shrink-0 mt-0.5" />
            <span>Expérience utilisateur simplifiée</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BiometricStep;
