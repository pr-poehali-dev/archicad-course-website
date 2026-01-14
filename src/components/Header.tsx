import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header = ({ onCTAClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="bg-white/60 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-transparent">
        <div className="font-bold text-2xl text-gray-800">
          <span className="text-primary">Archi</span><span className="text-gray-600">CAD</span>
        </div>



        <Button 
          onClick={() => {
            if (typeof window.ym !== 'undefined') {
              window.ym(105952933, 'reachGoal', 'enroll_course');
            }
            onCTAClick();
          }} 
          className="bg-primary hover:bg-primary/90 animate-pulse-subtle"
        >
          Записаться на курс
        </Button>
      </div>
    </header>
  );
};

export default Header;