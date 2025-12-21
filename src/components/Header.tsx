import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header = ({ onCTAClick }: HeaderProps) => {
  return (
    <header className="bg-white/60 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-transparent">
        <div className="font-bold text-2xl text-gray-800">
          <span className="text-primary">Archi</span><span className="text-gray-600">CAD</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          <a href="#about" className="hover:text-primary transition">О курсе</a>
          <a href="#program" className="hover:text-primary transition">Программа</a>
          <a href="#portfolio" className="hover:text-primary transition">Работы</a>
          <a href="#reviews" className="hover:text-primary transition">Отзывы</a>
          <a href="#contact" className="hover:text-primary transition">Контакты</a>
        </nav>

        <Button onClick={onCTAClick} className="bg-primary hover:bg-primary/90 animate-pulse-subtle">
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;