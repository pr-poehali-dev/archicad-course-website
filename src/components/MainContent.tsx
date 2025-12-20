import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MainContent = () => {
  return (
    <>
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-3xl -z-10"></div>
              <img 
                src="https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/b13986ea-fe8d-4ac6-ab51-d4fb6286a86d.jpg"
                alt="Ирина Бурцева" 
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-3xl -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-semibold">
                Автор курса
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">
                Ирина Бурцева
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
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
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" className="text-accent" size={14} />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-primary via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkg zNnptMC0xNmgxMnYxMkgzNnptLTI0IDBoMTJ2MTJIMTJ6bTAgMTZoMTJ2MTJIMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Стоимость обучения
              </h2>
              <p className="text-xl text-white/80">
                15 уроков • 2-3 месяца • Доступ навсегда
              </p>
            </div>

            <div className="bg-white text-primary rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 md:pr-12 pb-8 md:pb-0">
                  <div className="mb-6">
                    <div className="text-6xl md:text-7xl font-bold mb-2">12 900 ₽</div>
                    <div className="text-xl text-muted-foreground font-medium">Полная стоимость</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-accent/10 p-4 rounded-xl">
                      <Icon name="CreditCard" className="text-accent flex-shrink-0" size={24} />
                      <div>
                        <div className="font-semibold">Оплата Долями</div>
                        <div className="text-sm text-muted-foreground">от 3 225 ₽ × 4 платежа</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-xl mb-6">Что входит в курс:</h3>
                  {[
                    { icon: 'Play', text: '15 практических уроков' },
                    { icon: 'Folder', text: 'Все материалы для изучения' },
                    { icon: 'Infinity', text: 'Доступ к курсу навсегда' },
                    { icon: 'Headphones', text: 'Поддержка преподавателя' },
                    { icon: 'Award', text: 'Сертификат после обучения' },
                    { icon: 'Banknote', text: 'Возможность рассрочки' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} className="text-accent" size={18} />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/5 rounded-xl border border-accent/20">
                <p className="text-sm text-center">
                  <Icon name="Shield" className="inline-block mr-2 text-accent" size={18} />
                  Безопасная оплата. После оплаты вы получите мгновенный доступ к материалам курса.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Преимущества курса
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Все что нужно для освоения профессии 3D визуализатора
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: 'Laptop',
                title: 'Практический подход',
                description: 'Работа над реальными проектами с первого урока. Создавайте портфолио в процессе обучения.'
              },
              {
                icon: 'Headphones',
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
                description: 'Доступ к записям уроков навсегда. Учитесь в удобное время в своем темпе.'
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
              <Card key={idx} className="border-2 hover:border-accent hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon as any} className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Программа курса
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              4 модуля • 15 уроков • От основ до профессионального уровня
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                module: 'Модуль 1',
                title: 'Основы ArchiCAD',
                lessons: '4 урока',
                topics: ['Интерфейс программы', 'Базовые инструменты', 'Работа с чертежами', 'Настройка проекта']
              },
              {
                module: 'Модуль 2',
                title: '3D моделирование',
                lessons: '4 урока',
                topics: ['Создание 3D объектов', 'Работа с материалами', 'Освещение сцены', 'Камеры и ракурсы']
              },
              {
                module: 'Модуль 3',
                title: 'Визуализация интерьеров',
                lessons: '4 урока',
                topics: ['Настройка рендера', 'Постобработка', 'Создание презентаций', 'Работа с клиентами']
              },
              {
                module: 'Модуль 4',
                title: 'Профессиональные проекты',
                lessons: '3 урока',
                topics: ['Сложные проекты', 'Оптимизация работы', 'Портфолио']
              }
            ].map((module, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-2 bg-accent group-hover:w-3 transition-all duration-300"></div>
                    <div className="flex-1 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <span className="px-4 py-2 bg-accent/10 text-accent font-bold rounded-full">
                            {module.module}
                          </span>
                          <span className="text-sm text-muted-foreground">{module.lessons}</span>
                        </div>
                        <Icon name="ChevronRight" className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, topicIdx) => (
                          <span key={topicIdx} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Отзывы студентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              500+ выпускников успешно работают в сфере 3D визуализации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              <Card key={idx} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.photo} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-accent/10"
                    />
                    <div>
                      <div className="font-bold text-lg">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Работы студентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональные проекты наших выпускников
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
              <Card key={idx} className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm opacity-80 mb-1">{work.description}</div>
                      <div className="text-lg font-semibold">Автор: {work.author}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="User" size={16} />
                    {work.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-accent to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Карьерные возможности
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Выпускники курса успешно работают в различных сферах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
              <Card key={idx} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 mx-auto flex items-center justify-center">
                    <Icon name={item.icon as any} className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Частые вопросы
              </h2>
              <p className="text-xl text-muted-foreground">
                Ответы на популярные вопросы о курсе
              </p>
            </div>

            <div className="space-y-6">
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
                  answer: 'Оптимально 2-3 часа в день. Программа рассчитана на 2-3 месяца при таком темпе. Можно учиться быстрее или медленнее - доступ к материалам навсегда.'
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
                  answer: 'Да, доступна рассрочка через сервис Долями. Подробности уточняйте при записи - подберём удобный вариант оплаты для вас.'
                }
              ].map((faq, idx) => (
                <Card key={idx} className="border-2 hover:border-accent hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="HelpCircle" className="text-accent" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
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
