import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header = ({ onCTAClick }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white/25 backdrop-blur-md border-b border-gray-200/30 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl text-gray-800">
          <span className="text-primary">Archi</span><span className="text-gray-600">CAD</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition">О курсе</button>
          <button onClick={() => scrollToSection('program')} className="hover:text-primary transition">Программа</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition">Работы</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition">Отзывы</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Контакты</button>
        </nav>

        <Button onClick={onCTAClick} className="bg-primary hover:bg-primary/90">
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;