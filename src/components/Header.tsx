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

  const navLinks = [
    { href: '#about', label: 'О курсе' },
    { href: '#program', label: 'Программа' },
    { href: '#pricing', label: 'Стоимость' },
    { href: '#contact', label: 'Контакты' }
  ];

  return (
    <header className="bg-white/60 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-transparent">
        <div className="font-bold text-2xl text-gray-800">
          <span className="text-primary">Archi</span><span className="text-gray-600">CAD</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            onClick={() => {
              if (typeof window.ym !== 'undefined') {
                window.ym(105952933, 'reachGoal', 'enroll_course');
              }
              onCTAClick();
            }} 
            className="bg-primary hover:bg-primary/90 animate-pulse-subtle hidden md:inline-flex"
          >
            Записаться на курс
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <VisuallyHidden>
                <SheetTitle>Навигация</SheetTitle>
                <SheetDescription>Меню навигации по разделам</SheetDescription>
              </VisuallyHidden>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window.ym !== 'undefined') {
                      window.ym(105952933, 'reachGoal', 'enroll_course');
                    }
                    onCTAClick();
                  }} 
                  className="bg-primary hover:bg-primary/90 w-full"
                >
                  Записаться на курс
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;