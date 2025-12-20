import { Button } from '@/components/ui/button';

interface HeroAndStatsProps {
  onCTAClick: () => void;
}

const HeroAndStats = ({ onCTAClick }: HeroAndStatsProps) => {
  return (
    <>
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/185ec99e-eedd-4f5f-93a7-ee38251ff4ea.jpg)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/50 to-white/65"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              🏆 Профессиональное обучение с 2008 года
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Освойте <span className="text-primary">ArchiCAD</span><br />
              за <span className="text-accent">2-3 месяца</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Практический курс 3D визуализации интерьеров. 15 уроков, доступ навсегда. 
              Начните зарабатывать на своих навыках уже через 3 месяца.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={onCTAClick} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Начать обучение
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 text-lg px-8"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Подробнее о курсе
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              {[
                { value: '15', label: 'Уроков' },
                { value: '2-3', label: 'Месяца' },
                { value: '∞', label: 'Доступ' },
                { value: '500+', label: 'Выпускников' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAndStats;