import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    address: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка принята!",
      description: "Мы свяжемся с вами в ближайшее время для уточнения деталей.",
    });

    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      address: '',
      comment: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Оформить заказ
            </h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму и мы свяжемся с вами для уточнения деталей
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Форма бронирования</CardTitle>
              <CardDescription>Все поля обязательны для заполнения</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Выберите услугу</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange('service', value)} required>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cargo">Грузоперевозки</SelectItem>
                      <SelectItem value="movers">Услуги грузчиков</SelectItem>
                      <SelectItem value="trash">Вывоз мусора</SelectItem>
                      <SelectItem value="demolition">Демонтажные работы</SelectItem>
                      <SelectItem value="handyman">Услуги разнорабочих</SelectItem>
                      <SelectItem value="package">Упаковка и хранение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleChange('time', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Адрес</Label>
                  <Input
                    id="address"
                    placeholder="Укажите адрес погрузки/выполнения работ"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea
                    id="comment"
                    placeholder="Укажите дополнительные детали: объем груза, этаж, наличие лифта и т.д."
                    value={formData.comment}
                    onChange={(e) => handleChange('comment', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Работаем 24/7</p>
                    <p className="text-xs text-muted-foreground">Без выходных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Быстрая связь</p>
                    <p className="text-xs text-muted-foreground">Ответим за 5 минут</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold text-sm">Гарантия качества</p>
                    <p className="text-xs text-muted-foreground">Договор и чек</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
