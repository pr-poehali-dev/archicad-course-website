import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
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

  const handleCTAClick = () => {
    window.open('https://ihclick.ru/?p=272195&o=272212&idp=314945&erid=2VtzqvHfAQk', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-xl font-bold text-primary">ArchiCAD Pro</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О курсе</a>
            <a href="#program" className="text-foreground hover:text-primary transition-colors font-medium">Программа</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button onClick={handleCTAClick} size="lg" className="hidden md:flex">
            Записаться на курс
          </Button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/4d0627c2-e99d-49f1-9f82-9035023ce50c.jpg" 
            alt="ArchiCAD Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                Профессиональное обучение
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Освойте ArchiCAD<br />с нуля до PRO
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Практический курс 3D визуализации интерьеров от специалиста с опытом работы в Archicad и 3D Max. Научитесь создавать профессиональные проекты и зарабатывать на своих навыках.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={handleCTAClick} size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary" onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: 'Users', value: '500+', label: 'Выпускников' },
              { icon: 'Award', value: '15+', label: 'Лет опыта' },
              { icon: 'Clock', value: '40+', label: 'Часов практики' },
              { icon: 'Star', value: '4.9', label: 'Рейтинг курса' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Icon name={stat.icon as any} className="mx-auto text-primary" size={40} />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/Снимок экрана 2025-12-21 010340.png" 
                alt="Ирина Бурцева" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Кто автор курса?
              </h2>
              <h3 className="text-2xl font-semibold text-primary">
                Ирина Бурцева
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Практикующий 3D визуализатор интерьеров. Специалист по программам Archicad и 3D Max в сфере дизайна и архитектуры. Основатель онлайн школы «Учитель дома».
              </p>
              <div className="space-y-4 pt-4">
                {[
                  'Более 15 лет опыта в 3D визуализации',
                  'Создатель авторской методики обучения',
                  'Более 500 выпускников по всему миру',
                  'Индивидуальный подход к каждому студенту'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексная программа обучения от начального до профессионального уровня
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Laptop',
                title: 'Практический подход',
                description: 'Работа над реальными проектами с первого урока. Создавайте портфолио в процессе обучения.'
              },
              {
                icon: 'HeadphonesIcon',
                title: 'Поддержка 24/7',
                description: 'Постоянная связь с преподавателем. Ответы на все вопросы в течение суток.'
              },
              {
                icon: 'Briefcase',
                title: 'Помощь в трудоустройстве',
                description: 'Рекомендации по поиску работы и фриланс-заказов. Доступ к базе вакансий.'
              },
              {
                icon: 'Video',
                title: 'Видеоуроки',
                description: 'Доступ к записям уроков на 1 год. Учитесь в удобное время в своем темпе.'
              },
              {
                icon: 'FileCheck',
                title: 'Сертификат',
                description: 'Официальный сертификат о прохождении курса для вашего портфолио.'
              },
              {
                icon: 'Rocket',
                title: 'Быстрый старт',
                description: 'Начните работать над проектами уже через 2 недели после старта обучения.'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={feature.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Программа курса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Структурированная программа от основ до профессионального уровня
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                module: 'Модуль 1',
                title: 'Основы ArchiCAD',
                lessons: 'Уроки 1-8',
                topics: ['Интерфейс программы', 'Базовые инструменты', 'Работа с чертежами', 'Настройка проекта']
              },
              {
                module: 'Модуль 2',
                title: '3D моделирование',
                lessons: 'Уроки 9-16',
                topics: ['Создание 3D объектов', 'Работа с материалами', 'Освещение сцены', 'Камеры и ракурсы']
              },
              {
                module: 'Модуль 3',
                title: 'Визуализация интерьеров',
                lessons: 'Уроки 17-24',
                topics: ['Настройка рендера', 'Постобработка', 'Создание презентаций', 'Работа с клиентами']
              },
              {
                module: 'Модуль 4',
                title: 'Профессиональные проекты',
                lessons: 'Уроки 25-32',
                topics: ['Сложные проекты', 'Оптимизация работы', 'Портфолио', 'Коммерческая деятельность']
              }
            ].map((module, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {module.module}
                        </span>
                        <span className="text-sm text-muted-foreground">{module.lessons}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, topicIdx) => (
                          <span key={topicIdx} className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Icon name="BookOpen" className="text-muted-foreground flex-shrink-0" size={24} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Отзывы студентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 500 выпускников успешно работают в сфере 3D визуализации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Александра М.',
                role: '3D дизайнер',
                text: 'Курс превзошел все ожидания! За 3 месяца я освоила программу и уже работаю над коммерческими проектами.',
                rating: 5,
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
              },
              {
                name: 'Дмитрий К.',
                role: 'Архитектор',
                text: 'Отличная структура курса и поддержка преподавателя. Ирина объясняет сложные вещи простым языком.',
                rating: 5,
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
              },
              {
                name: 'Елена В.',
                role: 'Фрилансер',
                text: 'Получила все необходимые навыки для работы. Теперь зарабатываю на визуализации интерьеров удаленно.',
                rating: 5,
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
              },
              {
                name: 'Максим П.',
                role: 'Студент архитектуры',
                text: 'Программа отлично структурирована. Каждый урок - новые знания и практика. Рекомендую всем начинающим!',
                rating: 5,
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
              },
              {
                name: 'Ольга С.',
                role: 'Дизайнер интерьеров',
                text: 'Наконец-то освоила 3D визуализацию! Теперь могу показывать клиентам реалистичные проекты. Спасибо!',
                rating: 5,
                avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop'
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Записаться на курс
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Заполните форму, и мы свяжемся с вами в течение 24 часов
                  </p>
                </div>
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
                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} />
                <span className="text-xl font-bold">ArchiCAD Pro</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональное обучение 3D визуализации интерьеров
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@archicadpro.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="bg-primary-foreground/20 mb-8" />
          <div className="text-center text-primary-foreground/80 text-sm">
            <p>© 2024 ArchiCAD Pro. Все права защищены.</p>
            <p className="mt-2">erid: 2VtzqvHfAQk</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;