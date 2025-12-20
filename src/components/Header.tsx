import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header = ({ onCTAClick }: HeaderProps) => {
  return (
    <header className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl text-white">
          <span className="text-blue-400">Archi</span><span className="text-gray-300">CAD</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-blue-400 transition" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>О курсе</a>
          <a href="#program" className="hover:text-blue-400 transition" onClick={(e) => { e.preventDefault(); document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' }); }}>Программа</a>
          <a href="#portfolio" className="hover:text-blue-400 transition" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>Работы</a>
          <a href="#reviews" className="hover:text-blue-400 transition" onClick={(e) => { e.preventDefault(); document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }); }}>Отзывы</a>
          <a href="#contact" className="hover:text-blue-400 transition" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Контакты</a>
        </nav>

        <Button onClick={onCTAClick} className="bg-blue-600 hover:bg-blue-700 text-white">
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;