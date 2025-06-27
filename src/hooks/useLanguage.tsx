
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'sw';
  setLanguage: (lang: 'en' | 'sw') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    dashboard: 'Dashboard',
    orders: 'Orders',
    payments: 'Payments',
    settings: 'Settings',
    
    // Dashboard
    merchantDashboard: 'Merchant Dashboard',
    monitorOrders: 'Monitor your orders and payments in real-time',
    totalOrders: 'Total Orders',
    pendingOrders: 'Pending Orders',
    totalRevenue: 'Total Revenue',
    successRate: 'Success Rate',
    recentOrders: 'Recent Orders',
    retryPayment: 'Retry Payment',
    processing: 'Processing...',
    welcomeBack: 'Welcome Back',
    
    // Orders
    manageOrders: 'Manage and track all your orders',
    addOrder: 'Add Order',
    createNewOrder: 'Create New Order',
    productName: 'Product Name',
    enterProductName: 'Enter product name',
    amount: 'Amount (TSh)',
    createOrder: 'Create Order',
    cancel: 'Cancel',
    simulatePayment: 'Simulate Payment',
    paymentConfirmed: 'Payment Confirmed',
    processingPayment: 'Processing payment...',
    
    // Settings
    merchantSettings: 'Merchant Settings',
    configurePayment: 'Configure your payment methods and preferences',
    paymentMethod: 'Payment Method',
    selectPaymentMethod: 'Select Payment Method',
    mobileMoney: 'Mobile Money',
    creditCard: 'Credit/Debit Card',
    bankTransfer: 'Bank Transfer',
    paymentConfiguration: 'Payment Configuration',
    mobileProvider: 'Mobile Money Provider',
    phoneNumber: 'Phone Number',
    cardProvider: 'Card Payment Provider',
    apiKey: 'API Key',
    merchantId: 'Merchant ID',
    bankProvider: 'Bank Provider',
    accountNumber: 'Account Number',
    routingNumber: 'Routing Number',
    saveConfiguration: 'Save Configuration',
    
    // Payments
    paymentsDescription: 'Process payments and manage transactions',
    makePayment: 'Make Payment',
    paymentStatus: 'Payment Status',
    noActivePayments: 'No active payments at the moment',
    processPayment: 'Process Payment',
    enterAmount: 'Please enter an amount',
    error: 'Error',
    paymentSuccessful: 'Payment Successful!',
    paymentProcessed: 'Payment has been processed for',
    
    // Status
    pending: 'Pending',
    paid: 'Paid',
    failed: 'Failed',
    
    // Common
    save: 'Save',
    order: 'Order',
    
    // Toast messages
    orderCreated: 'Order Created',
    orderCreatedDesc: 'New order has been added successfully.',
    paymentSimulationStarted: 'Payment Simulation Started',
    paymentSuccessfulDesc: 'The payment has been processed successfully.',
    paymentFailedTitle: 'Payment Failed',
    paymentFailedDesc: 'Payment processing failed. Please try again.',
    settingsSaved: 'Settings Saved',
    settingsSavedDesc: 'Your payment configuration has been updated successfully.',
  },
  sw: {
    // Navigation
    dashboard: 'Dashibodi',
    orders: 'Maagizo',
    payments: 'Malipo',
    settings: 'Mipangilio',
    
    // Dashboard
    merchantDashboard: 'Dashibodi ya Mfanyabiashara',
    monitorOrders: 'Fuatilia maagizo na malipo yako kwa wakati halisi',
    totalOrders: 'Jumla ya Maagizo',
    pendingOrders: 'Maagizo Yanayosubiri',
    totalRevenue: 'Jumla ya Mapato',
    successRate: 'Kiwango cha Mafanikio',
    recentOrders: 'Maagizo ya Hivi Karibuni',
    retryPayment: 'Jaribu Malipo Tena',
    processing: 'Inachakata...',
    welcomeBack: 'Karibu Tena',
    
    // Orders
    manageOrders: 'Simamia na ufuatilie maagizo yako yote',
    addOrder: 'Ongeza Agizo',
    createNewOrder: 'Tengeneza Agizo Jipya',
    productName: 'Jina la Bidhaa',
    enterProductName: 'Ingiza jina la bidhaa',
    amount: 'Kiasi (TSh)',
    createOrder: 'Tengeneza Agizo',
    cancel: 'Ghairi',
    simulatePayment: 'Jaribisha Malipo',
    paymentConfirmed: 'Malipo Yamethibitishwa',
    processingPayment: 'Inachakata malipo...',
    
    // Settings
    merchantSettings: 'Mipangilio ya Mfanyabiashara',
    configurePayment: 'Sanidi njia zako za malipo na mapendeleo',
    paymentMethod: 'Njia ya Malipo',
    selectPaymentMethod: 'Chagua Njia ya Malipo',
    mobileMoney: 'Pesa za Simu',
    creditCard: 'Kadi ya Mkopo/Debiti',
    bankTransfer: 'Uhamishaji wa Benki',
    paymentConfiguration: 'Usanidi wa Malipo',
    mobileProvider: 'Mtoa Huduma za Pesa za Simu',
    phoneNumber: 'Nambari ya Simu',
    cardProvider: 'Mtoa Huduma za Kadi',
    apiKey: 'Ufunguo wa API',
    merchantId: 'Kitambulisho cha Mfanyabiashara',
    bankProvider: 'Mtoa Huduma za Benki',
    accountNumber: 'Nambari ya Akaunti',
    routingNumber: 'Nambari ya Uelekezo',
    saveConfiguration: 'Hifadhi Usanidi',
    
    // Payments
    paymentsDescription: 'Chakata malipo na simamia miamala',
    makePayment: 'Fanya Malipo',
    paymentStatus: 'Hali ya Malipo',
    noActivePayments: 'Hakuna malipo yanayoendelea kwa sasa',
    processPayment: 'Chakata Malipo',
    enterAmount: 'Tafadhali ingiza kiasi',
    error: 'Hitilafu',
    paymentSuccessful: 'Malipo Yamefanikiwa!',
    paymentProcessed: 'Malipo yamechakatwa kwa',
    
    // Status
    pending: 'Inasubiri',
    paid: 'Imelipwa',
    failed: 'Imeshindwa',
    
    // Common
    save: 'Hifadhi',
    order: 'Agizo',
    
    // Toast messages
    orderCreated: 'Agizo Limetengenezwa',
    orderCreatedDesc: 'Agizo jipya limeongezwa kwa mafanikio.',
    paymentSimulationStarted: 'Jaribio la Malipo Limeanza',
    paymentSuccessfulDesc: 'Malipo yamechakatwa kwa mafanikio.',
    paymentFailedTitle: 'Malipo Yameshindwa',
    paymentFailedDesc: 'Kuchakata malipo kumeshindwa. Tafadhali jaribu tena.',
    settingsSaved: 'Mipangilio Imehifadhiwa',
    settingsSavedDesc: 'Usanidi wako wa malipo umesasishwa kwa mafanikio.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'sw'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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
