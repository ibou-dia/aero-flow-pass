
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Check, Upload } from 'lucide-react';

const DocumentsUploadStep = () => {
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [visaFile, setVisaFile] = useState<File | null>(null);
  const [ticketFile, setTicketFile] = useState<File | null>(null);
  const [pnrCode, setPnrCode] = useState('');
  const [usePnr, setUsePnr] = useState(false);

  const handlePassportUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPassportFile(e.target.files[0]);
    }
  };

  const handleVisaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVisaFile(e.target.files[0]);
    }
  };

  const handleTicketUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTicketFile(e.target.files[0]);
    }
  };

  const toggleTicketMethod = () => {
    setUsePnr(!usePnr);
    setTicketFile(null);
    setPnrCode('');
  };

  return (
    <div className="space-y-6 form-step active">
      <div>
        <Label className="text-lg font-medium mb-4 block">Passeport</Label>
        <div className="space-y-4">
          <Card className={`border-2 ${passportFile ? 'border-green-500' : 'border-dashed'} rounded-lg transition-all`}>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              {passportFile ? (
                <div className="text-center py-6">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="font-medium">{passportFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {Math.round(passportFile.size / 1024)} Ko
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPassportFile(null)}
                    className="mt-2"
                  >
                    Changer
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center cursor-pointer py-6 w-full">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-aero-primary" />
                  </div>
                  <span className="font-medium">Téléverser votre passeport</span>
                  <span className="text-sm text-muted-foreground mt-1">
                    Cliquez ou glissez-déposez votre fichier
                  </span>
                  <Input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handlePassportUpload}
                  />
                </label>
              )}
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            Formats acceptés : JPG, PNG, PDF. Taille maximale : 5 Mo.
          </p>
        </div>
      </div>

      <div>
        <Label className="text-lg font-medium mb-4 block">Visa (si nécessaire)</Label>
        <div className="space-y-4">
          <Card className={`border-2 ${visaFile ? 'border-green-500' : 'border-dashed'} rounded-lg transition-all`}>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              {visaFile ? (
                <div className="text-center py-6">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="font-medium">{visaFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {Math.round(visaFile.size / 1024)} Ko
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setVisaFile(null)}
                    className="mt-2"
                  >
                    Changer
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center cursor-pointer py-6 w-full">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-aero-primary" />
                  </div>
                  <span className="font-medium">Téléverser votre visa</span>
                  <span className="text-sm text-muted-foreground mt-1">
                    Cliquez ou glissez-déposez votre fichier
                  </span>
                  <Input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleVisaUpload}
                  />
                </label>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <Label className="text-lg font-medium">Billet d'avion</Label>
          <Button variant="link" type="button" onClick={toggleTicketMethod}>
            {usePnr ? "Téléverser un fichier" : "Saisir le code PNR"}
          </Button>
        </div>

        {usePnr ? (
          <div className="space-y-4">
            <Label htmlFor="pnr-code">Code PNR / Réservation</Label>
            <Input
              id="pnr-code"
              value={pnrCode}
              onChange={(e) => setPnrCode(e.target.value)}
              placeholder="Ex: ABC123"
              className="max-w-xs"
            />
            <p className="text-sm text-muted-foreground">
              Le code PNR est généralement composé de 6 caractères alphanumériques.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <Card className={`border-2 ${ticketFile ? 'border-green-500' : 'border-dashed'} rounded-lg transition-all`}>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                {ticketFile ? (
                  <div className="text-center py-6">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="font-medium">{ticketFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {Math.round(ticketFile.size / 1024)} Ko
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setTicketFile(null)}
                      className="mt-2"
                    >
                      Changer
                    </Button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center cursor-pointer py-6 w-full">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                      <Upload className="h-6 w-6 text-aero-primary" />
                    </div>
                    <span className="font-medium">Téléverser votre billet</span>
                    <span className="text-sm text-muted-foreground mt-1">
                      Cliquez ou glissez-déposez votre fichier
                    </span>
                    <Input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={handleTicketUpload}
                    />
                  </label>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsUploadStep;
