# Ghala Technical Intern Challenge – Core Systems Simulation

## Overview
This project simulates Ghala's core system for handling **merchant payment configurations** and **order processing**. Built with modern web technologies and designed for scalability.

## Features
- Backend simulation for merchant preferences and order processing
- React + Vite + Tailwind frontend with admin UI
- Merchant settings management
- Order tracking system
- Payment simulation capabilities

---

## Architecture

### Merchant Configuration
Each merchant's payment method and settings are stored in a structured object:
```json
{
  "merchantId": "merchant-123",
  "paymentMethod": {
    "type": "mobile",
    "provider": "M-Pesa",
    "config": { "accountNumber": "07xxxxxxxx" }
  }
}
```

## Author
Built by **Japhtech** - Full Stack Developer

## Technology Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- React Query for state management
- React Router for navigation

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm/yarn/bun package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

### Building for Production
```bash
npm run build
# or
bun run build
```

## Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

## Contributing
This project is maintained by Japhtech. Feel free to submit issues and enhancement requests.

## License
© 2024 Japhtech. All rights reserved.

<lov-write file_path="vite.config.ts">
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

<lov-write file_path="src/components/Footer.tsx">
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  const partners = [
    { name: 'PlateAI', logo: '/lovable-uploads/ffa2f885-7128-4bf1-9b4f-cab5c64c42bc.png' },
    { name: 'Prints of PEACE', logo: '/lovable-uploads/855a4c22-ad60-4718-b775-f990fef743dd.png' },
    { name: 'WRIST ESSENTIALS', logo: '/lovable-uploads/59ab7d0a-42cb-44bc-b5f8-7634764ff844.png' },
    { name: 'TIPA TONE', logo: '/lovable-uploads/e48ed429-c91d-4756-9d36-02711f7ed778.png' },
    { name: 'tunda', logo: '/lovable-uploads/0ee31b12-e71e-495c-892d-57a5560cdb7e.png' },
    { name: 'Kalenga Tech', logo: '/lovable-uploads/d034c5fe-cded-41ae-9666-f2c18898ae84.png' },
    { name: 'Morwa & Loorie', logo: '/lovable-uploads/44d025ed-c039-4160-bb4a-d831b0181b41.png' },
    { name: 'inspire', logo: '/lovable-uploads/15a14c13-bcb1-4cff-a500-05876d03b904.png' },
    { name: 'Zuiyoe COLLECTION', logo: '/lovable-uploads/ffd174d0-e626-41df-a54e-1b5a4254a543.png' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Partners Section */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Ghala Imewezesha <span className="text-ghala-green">Biashara 40+</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center w-24 h-12 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-ghala-green rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/cbd62e89-dfdc-4462-ad21-aaea3e0c7174.png" 
                alt="Ghala" 
                className="w-5 h-5 text-white"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Ghala</span>
          </div>
          <p className="text-sm text-gray-600">
            © 2024 Japhtech. Haki zote zimehifadhiwa.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

<lov-write file_path="src/components/Sidebar.tsx">
import { useLanguage } from '@/hooks/useLanguage';
import { useLocation } from 'react-router-dom';
import { Home, ShoppingBag, CreditCard, Settings, Globe } from 'lucide-react';
import { NavLink } from 'react-router-dom';

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
            <span>Merchant Portal v1.0 - Built by Japhtech</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```
