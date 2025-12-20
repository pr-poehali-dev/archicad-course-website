import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header = ({ onCTAClick }: HeaderProps) => {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl text-gray-800">
          <span className="text-primary">Archi</span><span className="text-gray-600">CAD</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition">О курсе</a>
          <a href="#program" className="hover:text-primary transition">Программа</a>
          <a href="#portfolio" className="hover:text-primary transition">Работы</a>
          <a href="#reviews" className="hover:text-primary transition">Отзывы</a>
          <a href="#contact" className="hover:text-primary transition">Контакты</a>
        </nav>

        <Button onClick={onCTAClick} className="bg-primary hover:bg-primary/90">
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;