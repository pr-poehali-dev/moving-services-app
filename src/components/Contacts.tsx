import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Наши контакты</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Телефон</p>
                    <a href="tel:+79378703304" className="text-primary hover:underline">
                      +7 (937) 870-33-04
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Работаем 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:info@gruzprofi.ru" className="text-primary hover:underline">
                      info@gruzprofi.ru
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Адрес офиса</p>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Примерная, д. 123<br />
                      БЦ "Логистика", офис 456
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Мессенджеры</p>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://wa.me/79378703304', '_blank')}
                      >
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open('https://t.me/gruzprofi', '_blank')}
                      >
                        <Icon name="Send" size={16} className="mr-2" />
                        Telegram
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Реквизиты компании</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Полное наименование</p>
                  <p className="font-semibold text-foreground">ООО "ГрузПрофи"</p>
                </div>
                <div>
                  <p className="text-muted-foreground">ИНН</p>
                  <p className="font-semibold text-foreground">7701234567</p>
                </div>
                <div>
                  <p className="text-muted-foreground">КПП</p>
                  <p className="font-semibold text-foreground">770101001</p>
                </div>
                <div>
                  <p className="text-muted-foreground">ОГРН</p>
                  <p className="font-semibold text-foreground">1234567890123</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Юридический адрес</p>
                  <p className="font-semibold text-foreground">123456, г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <Icon name="FileText" size={16} className="inline mr-2" />
                  Предоставляем все закрывающие документы: договор, акт выполненных работ, счет на оплату
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;