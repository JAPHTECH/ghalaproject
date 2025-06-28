
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, QrCode } from 'lucide-react';

export function FloatingQRCard() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <Card className="w-64 shadow-lg border-2 border-ghala-green">
        <CardContent className="p-4 relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <QrCode className="h-4 w-4 text-ghala-green" />
              <span className="text-sm font-medium text-gray-700">Quick Demo</span>
            </div>
            
            <img 
              src="/lovable-uploads/c1d2bdd7-9d31-483b-8a53-b085bcf39432.png"
              alt="Ghala Demo QR Code"
              className="w-full h-auto rounded-lg"
            />
            
            <div className="text-xs text-gray-600 space-y-1">
              <p className="font-medium">Scan to see the</p>
              <p>demo of Ghala on</p>
              <p className="text-ghala-green font-bold">WhatsApp</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
