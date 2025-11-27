import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-xl font-bold text-foreground">Грузоперевозки Димитровград</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('booking')}>
              Заказать
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-foreground hover:text-primary transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-foreground hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-foreground hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('booking')} className="w-full">
                Заказать
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;