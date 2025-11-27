import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Truck',
    title: 'Грузоперевозки',
    description: 'Транспортировка грузов любого объема по городу и области. Современный автопарк, профессиональные водители.',
    features: ['Газели и грузовики', 'Межгород', 'Попутный груз', 'Срочная доставка']
  },
  {
    icon: 'Users',
    title: 'Услуги грузчиков',
    description: 'Опытные грузчики для погрузки, разгрузки и переноса тяжестей. Аккуратная работа с вашим имуществом.',
    features: ['Квартирные переезды', 'Офисные переезды', 'Подъем на этаж', 'Упаковка вещей']
  },
  {
    icon: 'Trash2',
    title: 'Вывоз мусора',
    description: 'Быстрый вывоз строительного и бытового мусора. Утилизация отходов с соблюдением экологических норм.',
    features: ['Строительный мусор', 'Бытовой мусор', 'Крупногабаритный', 'Вывоз хлама']
  },
  {
    icon: 'Wrench',
    title: 'Демонтажные работы',
    description: 'Профессиональный демонтаж конструкций, старой мебели, сантехники. Быстро и безопасно.',
    features: ['Демонтаж перегородок', 'Разборка мебели', 'Снос построек', 'Демонтаж сантехники']
  },
  {
    icon: 'Hammer',
    title: 'Услуги разнорабочих',
    description: 'Подсобные работы любой сложности. Помощь в ремонте, благоустройстве и хозяйственных делах.',
    features: ['Мелкий ремонт', 'Погрузо-разгрузочные работы', 'Уборка территории', 'Бытовые услуги']
  },
  {
    icon: 'Package',
    title: 'Упаковка и хранение',
    description: 'Профессиональная упаковка для безопасной перевозки. Краткосрочное и долгосрочное хранение вещей.',
    features: ['Упаковочные материалы', 'Защита мебели', 'Складское хранение', 'Погрузка-выгрузка']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для комфортного переезда и транспортировки грузов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
