
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:pl-64">
        <main className="py-6 px-4 lg:px-8">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
}
