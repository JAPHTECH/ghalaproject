
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Settings, ShoppingBag, CreditCard, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t('dashboard'), href: '/', icon: Home },
    { name: t('orders'), href: '/orders', icon: ShoppingBag },
    { name: t('payments'), href: '/payments', icon: CreditCard },
    { name: t('settings'), href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white shadow-md"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-ghala-green rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/cbd62e89-dfdc-4462-ad21-aaea3e0c7174.png" 
                  alt="Ghala" 
                  className="w-5 h-5"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">Ghala</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-ghala-green text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-ghala-green'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-ghala-green rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">M</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Mfanyabiashara</p>
                <p className="text-xs text-gray-500">mfanyabiashara@ghala.tz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
