import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const pricingPlans = [
  {
    title: 'Грузоперевозки',
    items: [
      { name: 'Газель (до 1.5 тонн)', price: 'от 500 ₽/час' },
      { name: 'Грузовик 3 тонны', price: 'от 800 ₽/час' },
      { name: 'Грузовик 5 тонн', price: 'от 1200 ₽/час' },
      { name: 'Межгород', price: 'от 25 ₽/км' }
    ]
  },
  {
    title: 'Грузчики',
    items: [
      { name: '1 грузчик', price: 'от 400 ₽/час' },
      { name: 'Бригада 2 человека', price: 'от 750 ₽/час' },
      { name: 'Бригада 3 человека', price: 'от 1100 ₽/час' },
      { name: 'Бригада 4+ человека', price: 'от 1400 ₽/час' }
    ]
  },
  {
    title: 'Дополнительные услуги',
    items: [
      { name: 'Вывоз мусора', price: 'от 1500 ₽' },
      { name: 'Демонтаж мебели', price: 'от 500 ₽' },
      { name: 'Упаковка вещей', price: 'от 300 ₽/м³' },
      { name: 'Разнорабочие', price: 'от 350 ₽/час' }
    ]
  }
];

const Pricing = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Цены на услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей. Окончательная стоимость зависит от объема работ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>Базовые расценки</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-foreground">{item.name}</span>
                      <span className="text-sm font-semibold text-primary">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={32} />
                <div>
                  <h3 className="font-bold text-lg">Минимальный заказ — 2 часа</h3>
                  <p className="text-sm opacity-90">При заказе от 4 часов — скидка 10%</p>
                </div>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={scrollToBooking}
                className="whitespace-nowrap"
              >
                Рассчитать стоимость
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
