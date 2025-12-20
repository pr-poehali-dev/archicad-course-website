import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroAndStatsProps {
  onCTAClick: () => void;
}

const HeroAndStats = ({ onCTAClick }: HeroAndStatsProps) => {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/4d0627c2-e99d-49f1-9f82-9035023ce50c.jpg" 
            alt="ArchiCAD Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-semibold mb-8">
              <Icon name="Award" size={16} />
              Профессиональное обучение с 2008 года
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Освойте <span className="text-accent">ArchiCAD</span><br />
              с нуля до PRO
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Практический курс 3D визуализации интерьеров. 15 уроков, 2-3 месяца обучения, доступ навсегда. 
              Создавайте профессиональные проекты и зарабатывайте на своих навыках.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button onClick={onCTAClick} size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6">
                Начать обучение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Подробнее о курсе
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '15', label: 'Практических уроков', icon: 'BookOpen' },
                { value: '2-3 мес', label: 'Длительность', icon: 'Calendar' },
                { value: 'Навсегда', label: 'Доступ к курсу', icon: 'Infinity' },
                { value: '500+', label: 'Выпускников', icon: 'Users' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Icon name={stat.icon as any} className="mx-auto text-accent mb-3" size={32} />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
