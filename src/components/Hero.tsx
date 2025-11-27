import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Профессиональные услуги грузоперевозок и переездов
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Надежная транспортировка грузов, квалифицированные грузчики, вывоз мусора и демонтажные работы. Работаем быстро, качественно и с гарантией.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} className="text-primary" />
                <span className="text-foreground">Опыт 10+ лет</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} className="text-primary" />
                <span className="text-foreground">Работаем 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={20} className="text-primary" />
                <span className="text-foreground">Гарантия качества</span>
              </div>
            </div>
            <Button size="lg" onClick={scrollToBooking} className="text-lg px-8">
              Заказать услугу
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/4d0b2b58-49dd-479a-b1b1-ef68e3364a05/files/38fd9e70-ef25-4765-b49c-835b27572ae1.jpg" 
              alt="Грузоперевозки" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
