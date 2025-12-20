import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const MainContent = () => {
  return (
    <>
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

      <section id="program" className="py-20">
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ваши возможности после курса
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Выпускники курса успешно работают в различных сферах
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Briefcase',
                title: 'Работа в студии',
                description: 'Трудоустройство в архитектурные и дизайн-студии'
              },
              {
                icon: 'Home',
                title: 'Фриланс',
                description: 'Удаленная работа на международных платформах'
              },
              {
                icon: 'TrendingUp',
                title: 'Доход от 60 000 ₽',
                description: 'Средний доход начинающих специалистов'
              },
              {
                icon: 'Users',
                title: 'Собственные проекты',
                description: 'Создание портфолио и привлечение клиентов'
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center">
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-primary-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Частые вопросы
              </h2>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы о курсе
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  question: 'Нужен ли опыт работы в 3D программах?',
                  answer: 'Нет, курс разработан для новичков. Мы начинаем с основ и постепенно переходим к сложным темам. Главное - желание учиться!'
                },
                {
                  question: 'Какой компьютер нужен для обучения?',
                  answer: 'Рекомендуем компьютер с процессором Intel Core i5 или выше, 8 ГБ оперативной памяти и видеокартой с 2 ГБ памяти. Точные требования высылаем после записи.'
                },
                {
                  question: 'Сколько времени нужно уделять обучению?',
                  answer: 'Оптимально 2-3 часа в день. Программа рассчитана на 2-3 месяца при таком темпе. Можно учиться быстрее или медленнее - доступ к материалам на год.'
                },
                {
                  question: 'Помогаете ли с трудоустройством?',
                  answer: 'Да! Мы даём рекомендации по созданию портфолио, составлению резюме и поиску первых заказов. Лучших студентов рекомендуем партнёрским компаниям.'
                },
                {
                  question: 'Какой документ выдаётся после обучения?',
                  answer: 'После успешной защиты итогового проекта выдаём сертификат о прохождении курса, который можно добавить в портфолио и резюме.'
                },
                {
                  question: 'Можно ли оплатить курс частями?',
                  answer: 'Да, доступна рассрочка. Подробности уточняйте при записи - подберём удобный вариант оплаты для вас.'
                }
              ].map((faq, idx) => (
                <Card key={idx} className="border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-2">
                      <Icon name="HelpCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground pl-7">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
