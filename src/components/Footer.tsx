import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Truck" size={28} />
              <span className="text-xl font-bold">ГрузПрофи</span>
            </div>
            <p className="text-sm opacity-80">
              Профессиональные услуги грузоперевозок, переездов и сопутствующих работ
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:opacity-100 transition-opacity">
                  Грузоперевозки
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:opacity-100 transition-opacity">
                  Услуги грузчиков
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:opacity-100 transition-opacity">
                  Вывоз мусора
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:opacity-100 transition-opacity">
                  Демонтаж
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:opacity-100 transition-opacity">
                  О компании
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:opacity-100 transition-opacity">
                  Цены
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:opacity-100 transition-opacity">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacts')} className="hover:opacity-100 transition-opacity">
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79378703304" className="hover:opacity-100 transition-opacity">
                  +7 (937) 870-33-04
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@gruzprofi.ru" className="hover:opacity-100 transition-opacity">
                  info@gruzprofi.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 ГрузПрофи. Все права защищены. | Работаем с 2014 года
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;