
import { useState, useEffect } from 'react';

export function WelcomeMessage() {
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  
  const welcomeTexts = [
    'Welcome Back', // English
    'Karibu Tena', // Swahili
    '欢迎回来', // Chinese
    'أهلاً بعودتك', // Arabic
    'Bienvenue', // French
    'Bienvenido', // Spanish
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % welcomeTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-4xl font-bold">
        <span className="text-ghala-green transition-all duration-500 ease-in-out animate-fade-in">
          {welcomeTexts[currentLangIndex]}
        </span>
      </h2>
    </div>
  );
}
