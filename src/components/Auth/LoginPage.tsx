
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t, language, setLanguage } = useLanguage();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock authentication - accept any username/password
    setTimeout(() => {
      if (credentials.username && credentials.password) {
        toast({
          title: language === 'sw' ? 'Umefanikiwa kuingia!' : 'Login Successful!',
          description: language === 'sw' ? 'Karibu kwenye dashibodi yako.' : 'Welcome to your dashboard.',
        });
        onLogin();
      } else {
        toast({
          title: language === 'sw' ? 'Hitilafu ya kuingia' : 'Login Error',
          description: language === 'sw' ? 'Tafadhali jaza sehemu zote.' : 'Please fill in all fields.',
          variant: 'destructive',
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-sm sm:max-w-md">
        {/* Header with logo and language switcher */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ghala-green rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/cbd62e89-dfdc-4462-ad21-aaea3e0c7174.png" 
                alt="Ghala" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Ghala</h1>
          </div>
          
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'sw' ? 'en' : 'sw')}
              className="text-sm font-medium hover:bg-gray-100 px-3 py-2"
            >
              {language === 'sw' ? 'Switch to English' : 'Badili kwa Kiswahili'}
            </Button>
          </div>
        </div>

        <Card className="animate-scale-in shadow-lg mx-2 sm:mx-0">
          <CardHeader className="text-center pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
              {language === 'sw' ? 'Ingia Akaunti' : 'Sign In'}
            </CardTitle>
            <p className="text-gray-600 mt-2 text-sm sm:text-base px-2">
              {language === 'sw' 
                ? 'Ingia ili kufikia dashibodi yako ya biashara' 
                : 'Sign in to access your merchant dashboard'}
            </p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium">
                  {language === 'sw' ? 'Jina la Mtumiaji' : 'Username'}
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  placeholder={language === 'sw' ? 'Ingiza jina la mtumiaji' : 'Enter your username'}
                  className="focus:ring-ghala-green focus:border-ghala-green transition-all duration-200 h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  {language === 'sw' ? 'Nywila' : 'Password'}
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  placeholder={language === 'sw' ? 'Ingiza nywila yako' : 'Enter your password'}
                  className="focus:ring-ghala-green focus:border-ghala-green transition-all duration-200 h-11"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-ghala-green hover:bg-ghala-green-dark text-white transition-all duration-200 hover:scale-105 relative overflow-hidden group h-11 text-base font-medium mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{language === 'sw' ? 'Inaingia...' : 'Signing in...'}</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">
                      {language === 'sw' ? 'Ingia' : 'Sign In'}
                    </span>
                    <div className="absolute inset-0 bg-white opacity-25 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2 font-medium">
                {language === 'sw' ? 'Maelezo ya Jaribio:' : 'Demo Credentials:'}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {language === 'sw' 
                  ? 'Tumia jina lolote la mtumiaji na nywila kuingia' 
                  : 'Use any username and password to sign in'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
