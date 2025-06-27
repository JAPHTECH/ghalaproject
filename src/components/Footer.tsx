
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
            © 2024 Ghala. Haki zote zimehifadhiwa.
          </p>
        </div>
      </div>
    </footer>
  );
}
