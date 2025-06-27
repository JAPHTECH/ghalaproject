
import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'sw' | 'en';
  setLanguage: (lang: 'sw' | 'en') => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const translations = {
  sw: {
    // Navigation
    dashboard: 'Dashibodi',
    orders: 'Maagizo',
    settings: 'Mipangilio',
    payments: 'Malipo',
    
    // Dashboard
    totalRevenue: 'Mapato Jumla',
    totalOrders: 'Maagizo Jumla',
    pendingOrders: 'Maagizo Yanayosubiri',
    completedOrders: 'Maagizo Yaliyokamilika',
    recentOrders: 'Maagizo ya Hivi Karibuni',
    
    // Orders
    orderId: 'Nambari ya Agizo',
    customer: 'Mteja',
    amount: 'Kiasi',
    status: 'Hali',
    date: 'Tarehe',
    pending: 'Inasubiri',
    paid: 'Imelipwa',
    failed: 'Imeshindwa',
    simulatePayment: 'Jaribisha Malipo',
    
    // Settings
    merchantSettings: 'Mipangilio ya Mfanyabiashara',
    paymentMethod: 'Njia ya Malipo',
    mobileMoney: 'Pesa za Simu',
    creditCard: 'Kadi ya Mkopo',
    bankTransfer: 'Uhamisho wa Benki',
    saveConfiguration: 'Hifadhi Mpangilio',
    
    // Payments
    paymentsDescription: 'Simamia na kushughulikia malipo yako',
    makePayment: 'Fanya Malipo',
    paymentMethod: 'Njia ya Malipo',
    processPayment: 'Shughulikia Malipo',
    processing: 'Inashughulikiwa',
    paymentStatus: 'Hali ya Malipo',
    processingPayment: 'Malipo yanashughulikiwa...',
    noActivePayments: 'Hakuna malipo yanayoendelea',
    paymentSuccessful: 'Malipo Yamefanikiwa',
    paymentProcessed: 'Malipo ya TSH {{amount}} yameshughulikiwa',
    
    // Common
    error: 'Hitilafu',
    enterAmount: 'Tafadhali ingiza kiasi',
    currency: 'TSH',
  },
  en: {
    // Navigation
    dashboard: 'Dashboard',
    orders: 'Orders',
    settings: 'Settings',
    payments: 'Payments',
    
    // Dashboard
    totalRevenue: 'Total Revenue',
    totalOrders: 'Total Orders',
    pendingOrders: 'Pending Orders',
    completedOrders: 'Completed Orders',
    recentOrders: 'Recent Orders',
    
    // Orders
    orderId: 'Order ID',
    customer: 'Customer',
    amount: 'Amount',
    status: 'Status',
    date: 'Date',
    pending: 'Pending',
    paid: 'Paid',
    failed: 'Failed',
    simulatePayment: 'Simulate Payment',
    
    // Settings
    merchantSettings: 'Merchant Settings',
    paymentMethod: 'Payment Method',
    mobileMoney: 'Mobile Money',
    creditCard: 'Credit Card',
    bankTransfer: 'Bank Transfer',
    saveConfiguration: 'Save Configuration',
    
    // Payments
    paymentsDescription: 'Manage and process your payments',
    makePayment: 'Make Payment',
    paymentMethod: 'Payment Method',
    processPayment: 'Process Payment',
    processing: 'Processing',
    paymentStatus: 'Payment Status',
    processingPayment: 'Processing payment...',
    noActivePayments: 'No active payments',
    paymentSuccessful: 'Payment Successful',
    paymentProcessed: 'Payment of TSH {{amount}} has been processed',
    
    // Common
    error: 'Error',
    enterAmount: 'Please enter an amount',
    currency: 'TSH',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'sw' | 'en'>('sw');

  const t = (key: string, params?: Record<string, string>) => {
    let translation = translations[language][key as keyof typeof translations['sw']] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, value);
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
