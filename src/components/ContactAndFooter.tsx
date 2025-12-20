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
      <section id="contact" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Записаться на курс
              </h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму и получите бесплатную консультацию
              </p>
            </div>

            <Card className="border-2 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14 text-base"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-7 bg-accent hover:bg-accent/90 font-semibold">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                  <p className="text-sm text-muted-foreground text-center pt-2">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Layers" size={20} />
                </div>
                <div>
                  <div className="font-bold text-xl">ArchiCAD Pro</div>
                  <div className="text-sm text-white/70">Онлайн школа</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Профессиональное обучение 3D визуализации интерьеров с 2008 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={18} />
                  <span>info@archicadpro.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white border border-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white border border-white/20">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white border border-white/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm space-y-2">
            <p>© 2024 ArchiCAD Pro. Все права защищены.</p>
            <p>erid: 2VtzqvHfAQk</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;
