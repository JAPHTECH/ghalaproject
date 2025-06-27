
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 lg:pl-64">
        <div className="flex items-center justify-between px-4 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-ghala-green rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/cbd62e89-dfdc-4462-ad21-aaea3e0c7174.png" 
                alt="Ghala" 
                className="w-5 h-5"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Ghala</h1>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <div className="flex-1 flex">
        <Sidebar />
        <div className="lg:pl-64 flex-1 flex flex-col">
          <main className="flex-1 py-6 px-4 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
