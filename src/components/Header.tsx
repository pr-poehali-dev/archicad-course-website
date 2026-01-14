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

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
          <a href="#about" className="hover:text-primary transition whitespace-nowrap">О курсе</a>
          <a href="#curriculum" className="hover:text-primary transition whitespace-nowrap">Программа</a>
          <a href="#portfolio" className="hover:text-primary transition whitespace-nowrap">Работы</a>
          <a href="#reviews" className="hover:text-primary transition whitespace-nowrap">Отзывы</a>
          <a href="#contact" className="hover:text-primary transition whitespace-nowrap">Контакты</a>
        </nav>

        <div className="hidden md:block">
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

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[180px] pt-3 px-3 pb-3 min-h-[320px]">
            <VisuallyHidden>
              <SheetTitle>Навигация</SheetTitle>
              <SheetDescription>Меню навигации по разделам сайта</SheetDescription>
            </VisuallyHidden>
            <nav className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-5 duration-300 rounded-0 px-[5px] py-[5px] my-[5px] mx-[15px]">
              <a 
                href="#about" 
                onClick={() => handleNavClick('#about')}
                className="text-sm hover:text-primary transition-all py-2"
              >
                О курсе
              </a>
              <a 
                href="#curriculum" 
                onClick={() => handleNavClick('#curriculum')}
                className="text-sm hover:text-primary transition-all py-2"
              >
                Программа
              </a>
              <a 
                href="#portfolio" 
                onClick={() => handleNavClick('#portfolio')}
                className="text-sm hover:text-primary transition-all py-2"
              >
                Работы
              </a>
              <a 
                href="#reviews" 
                onClick={() => handleNavClick('#reviews')}
                className="text-sm hover:text-primary transition-all py-2"
              >
                Отзывы
              </a>
              <a 
                href="#contact" 
                onClick={() => handleNavClick('#contact')}
                className="text-sm hover:text-primary transition-all py-2"
              >
                Контакты
              </a>
              <Button 
                onClick={() => {
                  if (typeof window.ym !== 'undefined') {
                    window.ym(105952933, 'reachGoal', 'enroll_course');
                  }
                  setIsOpen(false);
                  onCTAClick();
                }} 
                className="bg-primary hover:bg-primary/90 mt-4 w-full text-sm py-2.5 h-10"
              >
                Записаться
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;