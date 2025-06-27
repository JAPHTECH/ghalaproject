
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'sw' ? 'en' : 'sw')}
        className="text-sm font-medium hover:bg-gray-100"
      >
        {language === 'sw' ? 'EN' : 'SW'}
      </Button>
    </div>
  );
}
