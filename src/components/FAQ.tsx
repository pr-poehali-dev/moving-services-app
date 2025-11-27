import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Как быстро вы можете приехать?',
    answer: 'При наличии свободного транспорта мы можем приехать в течение 1-2 часов. Для гарантированной подачи в нужное время рекомендуем бронировать заранее.'
  },
  {
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем оплату наличными, банковскими картами и безналичным расчетом для юридических лиц. Выдаем все необходимые документы.'
  },
  {
    question: 'Включена ли погрузка-разгрузка в стоимость?',
    answer: 'Услуга транспорта оплачивается отдельно от услуг грузчиков. При заказе комплекса услуг предоставляем скидку.'
  },
  {
    question: 'Что делать, если груз не помещается?',
    answer: 'Наш диспетчер поможет подобрать транспорт нужного размера на основе ваших данных об объеме груза. При необходимости можем подать дополнительную машину.'
  },
  {
    question: 'Работаете ли вы в выходные и праздники?',
    answer: 'Да, мы работаем без выходных и праздничных дней, включая ночное время. Тарифы в праздники могут отличаться.'
  },
  {
    question: 'Есть ли минимальное время заказа?',
    answer: 'Минимальное время заказа составляет 2 часа. При заказе от 4 часов предоставляем скидку 10%.'
  },
  {
    question: 'Как вы гарантируете сохранность груза?',
    answer: 'Мы заключаем договор на каждый заказ и несем материальную ответственность за груз. Весь транспорт застрахован, грузчики обучены правильной технике работы с хрупкими предметами.'
  },
  {
    question: 'Можно ли отменить или перенести заказ?',
    answer: 'Да, вы можете отменить или перенести заказ не позднее чем за 3 часа до назначенного времени без штрафных санкций.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
