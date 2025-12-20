import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header = ({ onCTAClick }: HeaderProps) => {
  return (
    <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Building2" className="text-primary" size={32} />
          <span className="text-xl font-bold text-primary">ArchiCAD Pro</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О курсе</a>
          <a href="#program" className="text-foreground hover:text-primary transition-colors font-medium">Программа</a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
        </nav>
        <Button onClick={onCTAClick} size="lg" className="hidden md:flex">
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;
