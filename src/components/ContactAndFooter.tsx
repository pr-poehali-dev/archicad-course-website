import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const ContactAndFooter = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });

    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 bg-zinc-100 py-[45px]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                Записаться на курс
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Заполните форму и получите консультацию
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Хотите узнать больше?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте каталог всех наших курсов и выберите программу, которая подходит именно вам
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-lg px-8"
            onClick={() => window.open('https://ihclick.ru/?idp=314945&link=/catalog/', '_blank')}
          >
            <Icon name="BookOpen" className="mr-2" size={20} />
            Посмотреть все курсы
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="font-bold text-xl mb-4 text-gray-300">
                <span className="text-blue-400">Archi</span><span className="text-gray-400">CAD</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональное обучение 3D визуализации с 2008 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@archicadpro.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Youtube" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="MessageCircle" size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 ArchiCAD Pro. Все права защищены.</p>
            <p className="mt-2">erid: 2VtzqvHfAQk</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;