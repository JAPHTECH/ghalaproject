
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Smartphone, Building2, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

export function Payments() {
  const [amount, setAmount] = useState('');
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('mobile');
  const [mobileProvider, setMobileProvider] = useState('m-pesa');
  const { toast } = useToast();
  const { t } = useLanguage();

  const handlePayment = async () => {
    if (!amount) {
      toast({
        title: t('error'),
        description: t('enterAmount'),
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      toast({
        title: t('paymentSuccessful'),
        description: `${t('paymentProcessed')} TSH ${amount}`,
      });
      setAmount('');
    }, 3000);
  };

  const paymentMethods = [
    { id: 'mobile', name: t('mobileMoney'), icon: Smartphone },
    { id: 'card', name: t('creditCard'), icon: CreditCard },
    { id: 'bank', name: t('bankTransfer'), icon: Building2 },
  ];

  const mobileProviders = [
    { id: 'm-pesa', name: 'M-Pesa', logo: '/lovable-uploads/5c0f6fac-faae-465a-8919-26530c695913.png' },
    { id: 'airtel', name: 'Airtel Money', logo: '/lovable-uploads/c15034d7-ec65-41e6-9f70-280b2d52fde2.png' },
    { id: 'tigo', name: 'Tigo Pesa', logo: '/lovable-uploads/52f60fd1-bbe0-45b0-a668-f88b8708ad7e.png' },
    { id: 'halopesa', name: 'HaloPesa', logo: '/lovable-uploads/edbf6f59-5222-48bb-8017-fd47d1648b7b.png' },
    { id: 'zantel', name: 'Zantel', logo: '/lovable-uploads/175d3de8-f7db-48fc-9509-676096e528e0.png' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-gray-900">{t('payments')}</h1>
        <p className="text-gray-600 mt-1">{t('paymentsDescription')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Form */}
        <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-ghala-green" />
              <span>{t('makePayment')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="amount">{t('amount')} (TSH)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="50,000"
                className="mt-1 focus:ring-ghala-green focus:border-ghala-green"
                disabled={processing}
              />
            </div>

            <div>
              <Label>{t('paymentMethod')}</Label>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {paymentMethods.map((method) => (
                  <Button
                    key={method.id}
                    variant={paymentMethod === method.id ? "default" : "outline"}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`justify-start transition-all duration-200 ${
                      paymentMethod === method.id 
                        ? 'bg-ghala-green hover:bg-ghala-green-dark text-white' 
                        : 'hover:border-ghala-green hover:text-ghala-green'
                    }`}
                    disabled={processing}
                  >
                    <method.icon className="h-4 w-4 mr-2" />
                    {method.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Mobile Money Provider Selection */}
            {paymentMethod === 'mobile' && (
              <div className="animate-fade-in">
                <Label>Mobile Money Provider</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {mobileProviders.map((provider) => (
                    <Button
                      key={provider.id}
                      variant={mobileProvider === provider.id ? "default" : "outline"}
                      onClick={() => setMobileProvider(provider.id)}
                      className={`h-16 p-2 transition-all duration-200 ${
                        mobileProvider === provider.id 
                          ? 'bg-ghala-green hover:bg-ghala-green-dark text-white border-ghala-green' 
                          : 'hover:border-ghala-green'
                      }`}
                      disabled={processing}
                    >
                      <div className="flex flex-col items-center space-y-1">
                        <img 
                          src={provider.logo} 
                          alt={provider.name}
                          className="h-6 w-auto object-contain"
                        />
                        <span className="text-xs font-medium">{provider.name}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <Button 
              onClick={handlePayment}
              disabled={processing || !amount}
              className="w-full bg-ghala-green hover:bg-ghala-green-dark text-white relative overflow-hidden group"
            >
              {processing ? (
                <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  {t('processing')}
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t('processPayment')}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Payment Status */}
        <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-ghala-green" />
              <span>{t('paymentStatus')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {processing ? (
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-ghala-green mx-auto animate-spin mb-4" />
                  <p className="text-gray-600">{t('processingPayment')}</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">{t('noActivePayments')}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
