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

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary shadow-2xl overflow-hidden">
              <div className="bg-primary text-primary-foreground p-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Курс «Archicad для дизайнеров и архитекторов. Базовый уровень»
                </h2>
              </div>
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="mb-4">
                      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">12 900 ₽</div>
                      <div className="text-xl text-muted-foreground">Стоимость курса</div>
                    </div>
                    <Separator className="my-6" />
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="CreditCard" className="text-accent" size={24} />
                        <div>
                          <div className="font-semibold text-foreground">Оплата Долями</div>
                          <div className="text-sm text-muted-foreground">от 3 225 ₽ × 4 платежа</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="text-accent" size={24} />
                        <div className="text-sm text-muted-foreground">Безопасная оплата на нашем сайте</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <h3 className="font-semibold text-lg text-foreground mb-4">Что входит в курс:</h3>
                    {[
                      'Мгновенный доступ после оплаты',
                      'Все материалы для изучения',
                      'Доступ к курсу на 1 год',
                      'Поддержка преподавателя',
                      'Сертификат после обучения',
                      'Возможность рассрочки'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-accent flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-foreground text-center">
                    <Icon name="Info" className="inline-block mr-2 text-accent" size={18} />
                    Оплата производится на нашем сайте. После оплаты вы получите доступ к просмотру материала и сможете приступить к изучению.
                  </p>
                </div>
              </CardContent>
            </Card>
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
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/342b868c-b375-4960-809f-44c672e6ff53.jpg'
              },
              {
                name: 'Дмитрий К.',
                role: 'Архитектор',
                text: 'Отличная структура курса и поддержка преподавателя. Ирина объясняет сложные вещи простым языком.',
                rating: 5,
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/8828c92f-d4c0-4d74-8f56-c4b461a2006c.jpg'
              },
              {
                name: 'Елена В.',
                role: 'Фрилансер',
                text: 'Получила все необходимые навыки для работы. Теперь зарабатываю на визуализации интерьеров удаленно.',
                rating: 5,
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/04250176-fb7e-4889-80e1-912da9662f4c.jpg'
              },
              {
                name: 'Максим П.',
                role: 'Студент архитектуры',
                text: 'Программа отлично структурирована. Каждый урок - новые знания и практика. Рекомендую всем начинающим!',
                rating: 5,
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/5a6a2565-6c8b-41a1-98b7-c6b3735648bc.jpg'
              },
              {
                name: 'Ольга С.',
                role: 'Дизайнер интерьеров',
                text: 'Наконец-то освоила 3D визуализацию! Теперь могу показывать клиентам реалистичные проекты. Спасибо!',
                rating: 5,
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/b97303af-d278-49d1-93e7-c21a79a9a5e8.jpg'
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.photo} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Примеры работ студентов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные проекты наших выпускников
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/c348d25f-3457-43d7-96e4-ebed29457425.jpg',
                title: 'Современная гостиная',
                author: 'Александра М.',
                description: 'Дипломный проект курса'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/a0f2363e-56f2-4999-9039-4873086f087c.jpg',
                title: 'Кухня в стиле минимализм',
                author: 'Дмитрий К.',
                description: 'Коммерческий заказ'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/00a0a095-81c5-423b-93bc-3416d121a90f.jpg',
                title: 'Спальня в современном стиле',
                author: 'Елена В.',
                description: 'Проект для портфолио'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/afeedc27-8145-4486-8f4d-30f84e23e4ac.jpg',
                title: 'Офисное пространство',
                author: 'Максим П.',
                description: 'Дипломная работа'
              }
            ].map((work, idx) => (
              <Card key={idx} className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{work.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">Автор: {work.author}</p>
                  <p className="text-sm text-primary font-medium">{work.description}</p>
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