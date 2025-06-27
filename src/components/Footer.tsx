
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  const partners = [
    'PlateAI',
    'Prints of PEACE',
    'WRIST ESSENTIALS',
    'TIPA TONE',
    'tunda',
    'Kalenga Tech',
    'Morwa & Loorie',
    'inspire',
    'Zuiyoe COLLECTION'
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Partners Section */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Ghala Imewezesha <span className="text-ghala-green">Biashara 40+</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="text-sm font-medium text-gray-600 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {partner}
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
