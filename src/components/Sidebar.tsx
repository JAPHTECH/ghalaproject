
import { NavLink, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, CreditCard, Settings, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function Sidebar() {
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('dashboard'), href: '/', icon: Home },
    { name: t('orders'), href: '/orders', icon: ShoppingBag },
    { name: t('payments'), href: '/payments', icon: CreditCard },
    { name: t('settings'), href: '/settings', icon: Settings },
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:block hidden border-r border-gray-200">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
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
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={`
                  group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105
                  ${
                    isActive
                      ? 'bg-ghala-green text-white shadow-lg animate-scale-in'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-ghala-green'
                  }
                `}
              >
                <item.icon
                  className={`
                    mr-3 h-5 w-5 transition-all duration-200
                    ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-ghala-green'}
                  `}
                />
                {item.name}
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-bounce-gentle" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center text-xs text-gray-500">
            <Globe className="h-4 w-4 mr-2" />
            <span>Merchant Portal v1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
