import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header = ({ onCTAClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center">
              <Icon name="Layers" className="text-white" size={20} />
            </div>
            <div>
              <div className="font-bold text-xl tracking-tight">ArchiCAD Pro</div>
              <div className="text-xs text-muted-foreground">Онлайн школа</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О курсе</a>
            <a href="#program" className="text-sm font-medium hover:text-accent transition-colors">Программа</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Работы</a>
            <a href="#reviews" className="text-sm font-medium hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </nav>

          <Button onClick={onCTAClick} className="bg-accent hover:bg-accent/90 text-white font-semibold">
            Записаться
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
