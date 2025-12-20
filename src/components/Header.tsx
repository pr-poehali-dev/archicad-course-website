import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header = ({ onCTAClick }: HeaderProps) => {
  return (
    <header className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl text-gray-800">
          <span className="text-primary">Archi</span><span className="text-gray-600">CAD</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-primary transition" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>О курсе</a>
          <a href="#program" className="hover:text-primary transition" onClick={(e) => { e.preventDefault(); document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' }); }}>Программа</a>
          <a href="#portfolio" className="hover:text-primary transition" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>Работы</a>
          <a href="#reviews" className="hover:text-primary transition" onClick={(e) => { e.preventDefault(); document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }); }}>Отзывы</a>
          <a href="#contact" className="hover:text-primary transition" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Контакты</a>
        </nav>

        <Button onClick={onCTAClick} className="bg-primary hover:bg-primary/90">
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;