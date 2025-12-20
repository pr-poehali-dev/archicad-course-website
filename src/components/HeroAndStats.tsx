import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroAndStatsProps {
  onCTAClick: () => void;
}

const HeroAndStats = ({ onCTAClick }: HeroAndStatsProps) => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/4d0627c2-e99d-49f1-9f82-9035023ce50c.jpg" 
            alt="ArchiCAD Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                Профессиональное обучение
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Освойте ArchiCAD<br />с нуля до PRO
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Практический курс 3D визуализации интерьеров от специалиста с опытом работы в Archicad и 3D Max. Научитесь создавать профессиональные проекты и зарабатывать на своих навыках.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={onCTAClick} size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary" onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: 'Users', value: '500+', label: 'Выпускников' },
              { icon: 'Award', value: '15+', label: 'Лет опыта' },
              { icon: 'Clock', value: '40+', label: 'Часов практики' },
              { icon: 'Star', value: '4.9', label: 'Рейтинг курса' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Icon name={stat.icon as any} className="mx-auto text-primary" size={40} />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAndStats;
