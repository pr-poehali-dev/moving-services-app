import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '10+', label: 'лет на рынке', icon: 'Award' },
  { value: '5000+', label: 'выполненных заказов', icon: 'CheckCircle' },
  { value: '50+', label: 'единиц техники', icon: 'Truck' },
  { value: '100+', label: 'специалистов в команде', icon: 'Users' }
];

const advantages = [
  {
    icon: 'ShieldCheck',
    title: 'Гарантия качества',
    description: 'Заключаем договор на каждый заказ. Несем полную ответственность за сохранность груза.'
  },
  {
    icon: 'Clock',
    title: 'Точность во времени',
    description: 'Приезжаем строго к назначенному времени. Оперативно выполняем работу без задержек.'
  },
  {
    icon: 'Wrench',
    title: 'Профессионализм',
    description: 'Опытные специалисты с профильным образованием. Регулярное обучение персонала.'
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7',
    description: 'Круглосуточная диспетчерская служба. Готовы принять ваш заказ в любое время.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            О компании
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы — команда профессионалов с многолетним опытом в сфере грузоперевозок и переездов
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <Icon name={stat.icon as any} size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Наша миссия</h3>
            <p className="text-muted-foreground mb-4">
              Мы стремимся сделать процесс грузоперевозок и переездов максимально комфортным для наших клиентов. 
              Наша цель — это не просто перевезти груз из точки А в точку Б, а обеспечить полный спектр услуг 
              с гарантией качества и безопасности.
            </p>
            <p className="text-muted-foreground">
              За годы работы мы выработали эффективную систему логистики, подобрали надежную команду 
              и сформировали парк современной техники для решения задач любой сложности.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Почему выбирают нас</h3>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={advantage.icon as any} size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{advantage.title}</h4>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Работаем официально</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Все наши сотрудники оформлены согласно ТК РФ. Мы платим налоги и несем полную юридическую 
              ответственность за выполненные работы. Предоставляем закрывающие документы.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
