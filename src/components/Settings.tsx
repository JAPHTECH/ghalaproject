
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Smartphone, Building2, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Settings() {
  const [paymentMethod, setPaymentMethod] = useState('mobile');
  const [config, setConfig] = useState({
    mobile: { provider: 'M-Pesa', phoneNumber: '' },
    card: { provider: 'Stripe', apiKey: '', merchantId: '' },
    bank: { provider: 'CRDB Bank', accountNumber: '', routingNumber: '' }
  });
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your payment configuration has been updated successfully.",
    });
  };

  const updateConfig = (method: string, field: string, value: string) => {
    setConfig(prev => ({
      ...prev,
      [method]: { ...prev[method as keyof typeof prev], [field]: value }
    }));
  };

  const getPaymentIcon = (method: string) => {
    switch (method) {
      case 'mobile': return <Smartphone className="h-5 w-5 text-ghala-green" />;
      case 'card': return <CreditCard className="h-5 w-5 text-ghala-green" />;
      case 'bank': return <Building2 className="h-5 w-5 text-ghala-green" />;
      default: return null;
    }
  };

  const getBankLogo = (bankName: string) => {
    const logos: { [key: string]: string } = {
      'CRDB Bank': '/lovable-uploads/44d025ed-c039-4160-bb4a-d831b0181b41.png',
      'NMB Bank': '/lovable-uploads/0ee31b12-e71e-495c-892d-57a5560cdb7e.png',
      'NBC Bank': '/lovable-uploads/15a14c13-bcb1-4cff-a500-05876d03b904.png',
      'Equity Bank': '/lovable-uploads/d034c5fe-cded-41ae-9666-f2c18898ae84.png',
      'Stanbic Bank': '/lovable-uploads/e48ed429-c91d-4756-9d36-02711f7ed778.png',
      'Standard Chartered': '/lovable-uploads/855a4c22-ad60-4718-b775-f990fef743dd.png'
    };
    return logos[bankName] || null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-gray-900">Merchant Settings</h1>
        <p className="text-gray-600 mt-1">Configure your payment methods and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Method Selection */}
        <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {getPaymentIcon(paymentMethod)}
              <span>Payment Method</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="payment-method">Select Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger className="mt-1 focus:ring-ghala-green">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="mobile" className="hover:bg-gray-100">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <span>Mobile Money</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="card" className="hover:bg-gray-100">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Credit/Debit Card</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="bank" className="hover:bg-gray-100">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span>Bank Transfer</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['mobile', 'card', 'bank'].map((method) => (
                <Button
                  key={method}
                  variant={paymentMethod === method ? "default" : "outline"}
                  onClick={() => setPaymentMethod(method)}
                  className={`transition-all duration-200 ${
                    paymentMethod === method 
                      ? 'bg-ghala-green hover:bg-ghala-green-dark text-white' 
                      : 'hover:border-ghala-green hover:text-ghala-green'
                  }`}
                >
                  {getPaymentIcon(method)}
                  <span className="ml-2 capitalize">{method}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Configuration */}
        <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle>Payment Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {paymentMethod === 'mobile' && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <Label htmlFor="mobile-provider">Mobile Money Provider</Label>
                  <Select 
                    value={config.mobile.provider} 
                    onValueChange={(value) => updateConfig('mobile', 'provider', value)}
                  >
                    <SelectTrigger className="mt-1 focus:ring-ghala-green">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg">
                      <SelectItem value="M-Pesa">M-Pesa</SelectItem>
                      <SelectItem value="Airtel Money">Airtel Money</SelectItem>
                      <SelectItem value="MTN Mobile Money">MTN Mobile Money</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input
                    id="phone-number"
                    value={config.mobile.phoneNumber}
                    onChange={(e) => updateConfig('mobile', 'phoneNumber', e.target.value)}
                    placeholder="+255 XXX XXX XXX"
                    className="mt-1 focus:ring-ghala-green focus:border-ghala-green"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <Label htmlFor="card-provider">Card Payment Provider</Label>
                  <Select 
                    value={config.card.provider} 
                    onValueChange={(value) => updateConfig('card', 'provider', value)}
                  >
                    <SelectTrigger className="mt-1 focus:ring-ghala-green">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg">
                      <SelectItem value="Stripe">Stripe</SelectItem>
                      <SelectItem value="PayPal">PayPal</SelectItem>
                      <SelectItem value="Square">Square</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="api-key">API Key</Label>
                  <Input
                    id="api-key"
                    type="password"
                    value={config.card.apiKey}
                    onChange={(e) => updateConfig('card', 'apiKey', e.target.value)}
                    placeholder="sk_test_..."
                    className="mt-1 focus:ring-ghala-green focus:border-ghala-green"
                  />
                </div>
                <div>
                  <Label htmlFor="merchant-id">Merchant ID</Label>
                  <Input
                    id="merchant-id"
                    value={config.card.merchantId}
                    onChange={(e) => updateConfig('card', 'merchantId', e.target.value)}
                    placeholder="acct_..."
                    className="mt-1 focus:ring-ghala-green focus:border-ghala-green"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <Label htmlFor="bank-provider">Bank Provider</Label>
                  <Select 
                    value={config.bank.provider} 
                    onValueChange={(value) => updateConfig('bank', 'provider', value)}
                  >
                    <SelectTrigger className="mt-1 focus:ring-ghala-green">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg">
                      <SelectItem value="CRDB Bank">
                        <div className="flex items-center space-x-2">
                          <img src={getBankLogo('CRDB Bank')} alt="CRDB Bank" className="w-6 h-6 object-contain" />
                          <span>CRDB Bank</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="NMB Bank">
                        <div className="flex items-center space-x-2">
                          <img src={getBankLogo('NMB Bank')} alt="NMB Bank" className="w-6 h-6 object-contain" />
                          <span>NMB Bank</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="NBC Bank">
                        <div className="flex items-center space-x-2">
                          <img src={getBankLogo('NBC Bank')} alt="NBC Bank" className="w-6 h-6 object-contain" />
                          <span>NBC Bank</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="Equity Bank">
                        <div className="flex items-center space-x-2">
                          <img src={getBankLogo('Equity Bank')} alt="Equity Bank" className="w-6 h-6 object-contain" />
                          <span>Equity Bank</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="Stanbic Bank">
                        <div className="flex items-center space-x-2">
                          <img src={getBankLogo('Stanbic Bank')} alt="Stanbic Bank" className="w-6 h-6 object-contain" />
                          <span>Stanbic Bank</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="Standard Chartered">
                        <div className="flex items-center space-x-2">
                          <img src={getBankLogo('Standard Chartered')} alt="Standard Chartered" className="w-6 h-6 object-contain" />
                          <span>Standard Chartered</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="account-number">Account Number</Label>
                  <Input
                    id="account-number"
                    value={config.bank.accountNumber}
                    onChange={(e) => updateConfig('bank', 'accountNumber', e.target.value)}
                    placeholder="1234567890"
                    className="mt-1 focus:ring-ghala-green focus:border-ghala-green"
                  />
                </div>
                <div>
                  <Label htmlFor="routing-number">Routing Number</Label>
                  <Input
                    id="routing-number"
                    value={config.bank.routingNumber}
                    onChange={(e) => updateConfig('bank', 'routingNumber', e.target.value)}
                    placeholder="123456789"
                    className="mt-1 focus:ring-ghala-green focus:border-ghala-green"
                  />
                </div>
              </div>
            )}

            <Button 
              onClick={handleSave}
              className="w-full bg-ghala-green hover:bg-ghala-green-dark text-white relative overflow-hidden group"
            >
              <Save className="h-4 w-4 mr-2" />
              <span className="relative z-10">Save Configuration</span>
              <div className="absolute inset-0 bg-white opacity-25 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
