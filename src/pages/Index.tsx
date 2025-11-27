import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Truck',
    title: 'Грузоперевозки',
    description: 'Перевозка грузов любого объема по городу и области',
    price: 'от 1500 ₽/час'
  },
  {
    icon: 'Users',
    title: 'Услуги грузчиков',
    description: 'Профессиональная бригада грузчиков для погрузки и разгрузки',
    price: 'от 500 ₽/час/чел'
  },
  {
    icon: 'Trash2',
    title: 'Вывоз мусора',
    description: 'Утилизация строительного и бытового мусора',
    price: 'от 2000 ₽'
  },
  {
    icon: 'Wrench',
    title: 'Демонтаж',
    description: 'Демонтаж конструкций, перегородок, старой мебели',
    price: 'от 800 ₽/м²'
  },
  {
    icon: 'HardHat',
    title: 'Разнорабочие',
    description: 'Помощь в строительных и хозяйственных работах',
    price: 'от 600 ₽/час/чел'
  }
];

const pricingData = [
  { category: 'Грузоперевозки', items: [
    { name: 'Газель (3 тонны)', price: '1500 ₽/час' },
    { name: 'Камаз (10 тонн)', price: '2500 ₽/час' },
    { name: 'Фура (20 тонн)', price: '4000 ₽/час' }
  ]},
  { category: 'Грузчики', items: [
    { name: 'Грузчик (1 час)', price: '500 ₽/час' },
    { name: 'Бригада 2 чел (1 час)', price: '900 ₽/час' },
    { name: 'Бригада 4 чел (1 час)', price: '1700 ₽/час' }
  ]},
  { category: 'Дополнительно', items: [
    { name: 'Вывоз мусора (контейнер)', price: '2000-5000 ₽' },
    { name: 'Демонтаж стен', price: '800 ₽/м²' },
    { name: 'Упаковочные материалы', price: 'от 300 ₽' }
  ]}
];

const faqData = [
  { q: 'Как быстро вы можете приехать?', a: 'Мы работаем 24/7. В среднем наша бригада приезжает через 1-2 часа после заявки. Срочные заказы выполняем в течение 30 минут.' },
  { q: 'Какая минимальная стоимость заказа?', a: 'Минимальный заказ — 2 часа работы. Для грузоперевозок это 3000 ₽, для грузчиков — 1000 ₽ за одного человека.' },
  { q: 'Нужно ли предоплата?', a: 'Предоплата не требуется. Оплата производится после выполнения работ наличными или переводом.' },
  { q: 'Вы работаете в выходные?', a: 'Да, мы работаем без выходных и праздничных дней. Стоимость услуг в выходные не меняется.' },
  { q: 'Есть ли страховка груза?', a: 'Да, все грузы застрахованы. В случае повреждения мы компенсируем полную стоимость по договору.' }
];

export default function Index() {
  const [distance, setDistance] = useState('');
  const [volume, setVolume] = useState('');
  const [workers, setWorkers] = useState('2');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const dist = parseFloat(distance) || 0;
    const vol = parseFloat(volume) || 0;
    const work = parseInt(workers) || 2;
    
    const basePrice = 1500;
    const pricePerKm = 30;
    const pricePerCubic = 200;
    const workerPrice = 500;
    
    const total = basePrice + (dist * pricePerKm) + (vol * pricePerCubic) + (work * workerPrice);
    setCalculatedPrice(Math.round(total));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={32} className="text-secondary" />
              <span className="text-2xl font-bold text-primary">ГрузЭкспресс</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#services" className="text-foreground hover:text-secondary transition-colors">Услуги</a>
              <a href="#calculator" className="text-foreground hover:text-secondary transition-colors">Калькулятор</a>
              <a href="#prices" className="text-foreground hover:text-secondary transition-colors">Цены</a>
              <a href="#faq" className="text-foreground hover:text-secondary transition-colors">FAQ</a>
              <a href="#contacts" className="text-foreground hover:text-secondary transition-colors">Контакты</a>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Грузоперевозки и услуги грузчиков
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные услуги по перевозке грузов, демонтажу и вывозу мусора. 
            Работаем 24/7, быстро и надежно.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow animate-scale-in border-2 hover:border-secondary/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">Онлайн-калькулятор</h2>
          <p className="text-center text-muted-foreground mb-8">Рассчитайте стоимость перевозки за несколько секунд</p>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" size={24} className="text-secondary" />
                Расчет стоимости
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="distance">Расстояние (км)</Label>
                <Input 
                  id="distance" 
                  type="number" 
                  placeholder="Например: 15" 
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume">Объем груза (м³)</Label>
                <Input 
                  id="volume" 
                  type="number" 
                  placeholder="Например: 5" 
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workers">Количество грузчиков</Label>
                <Input 
                  id="workers" 
                  type="number" 
                  placeholder="Например: 2" 
                  value={workers}
                  onChange={(e) => setWorkers(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button 
                onClick={calculatePrice} 
                className="w-full bg-secondary hover:bg-secondary/90 text-lg h-12"
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Рассчитать
              </Button>
              {calculatedPrice !== null && (
                <div className="mt-6 p-6 bg-secondary/10 rounded-lg text-center animate-fade-in border-2 border-secondary/30">
                  <p className="text-muted-foreground mb-2">Ориентировочная стоимость:</p>
                  <p className="text-4xl font-bold text-secondary">{calculatedPrice} ₽</p>
                  <p className="text-sm text-muted-foreground mt-2">*Точная стоимость уточняется у менеджера</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="prices" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Цены</h2>
          <div className="space-y-6">
            {pricingData.map((category, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-center pb-3 border-b last:border-0">
                        <span className="text-foreground">{item.name}</span>
                        <span className="font-bold text-secondary text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">О компании</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">12+</div>
                  <p className="text-muted-foreground">лет на рынке</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">5000+</div>
                  <p className="text-muted-foreground">довольных клиентов</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">50+</div>
                  <p className="text-muted-foreground">единиц техники</p>
                </div>
              </div>
              <p className="text-lg text-center text-foreground leading-relaxed">
                Мы — профессиональная компания с многолетним опытом в сфере грузоперевозок. 
                Наша команда состоит из опытных водителей и грузчиков, готовых выполнить 
                заказ любой сложности быстро и качественно. Гарантируем сохранность вашего 
                груза и соблюдение сроков.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Вопросы и ответы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-secondary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center gap-3">
              <Icon name="Phone" size={32} />
              <h3 className="font-bold text-xl">Телефон</h3>
              <p className="text-lg">+7 (999) 123-45-67</p>
              <p className="text-lg">+7 (999) 765-43-21</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon name="Mail" size={32} />
              <h3 className="font-bold text-xl">Email</h3>
              <p className="text-lg">info@gruzexpress.ru</p>
              <p className="text-lg">order@gruzexpress.ru</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon name="MapPin" size={32} />
              <h3 className="font-bold text-xl">Адрес</h3>
              <p className="text-lg">г. Москва, ул. Примерная, д. 123</p>
              <p className="text-lg">Офис 45</p>
            </div>
          </div>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-8">
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Написать нам
          </Button>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Truck" size={28} />
            <span className="text-xl font-bold">ГрузЭкспресс</span>
          </div>
          <p className="text-sm opacity-80">© 2024 ГрузЭкспресс. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
