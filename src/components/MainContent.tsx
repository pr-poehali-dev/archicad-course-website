import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MainContent = () => {
  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/Ирина 2.jpg"
                alt="Ирина Бурцева" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-accent/10 rounded-full text-accent text-sm font-semibold">
                Автор курса
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                Ирина Бурцева
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Практикующий 3D визуализатор интерьеров. Специалист по программам Archicad и 3D Max. 
                Основатель онлайн школы «Учитель дома».
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                В курсе рассмотрен основной функционал программы на примере создания чертежей раздела АР для коттеджа.
              </p>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-gray-900">Краткая программа курса «Archicad 23-27 для дизайнеров и архитекторов. Базовый уровень»:</h3>
                {[
                  '1. Знакомство с программой Archicad. Базовые инструменты.',
                  '2. Планы этажей и трехмерные объекты.',
                  '3. Назначение материалов, создание экспликации.',
                  '4. Библиотеки программы. Виды чертежей.',
                  '5. Создание сложных объектов. Оформление проекта.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-primary" size={14} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-700 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Курс «Archicad для дизайнеров и архитекторов»
            </h2>
            <p className="text-base sm:text-xl text-white/90">
              15 уроков • 2-3 месяца • Доступ навсегда
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <div className="text-4xl sm:text-6xl font-bold text-primary mb-2">12 900 ₽</div>
                <div className="text-lg text-gray-600 mb-6">Полная стоимость</div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="CreditCard" className="text-accent" size={24} />
                    <div>
                      <div className="font-semibold">Оплата Долями</div>
                      <div className="text-sm text-gray-600">от 3 225 ₽ × 4 платежа</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg mb-4">Что входит в курс:</h3>
                {[
                  '15 практических уроков',
                  'Все материалы для изучения',
                  'Доступ к курсу навсегда',
                  'Поддержка преподавателя',
                  'Сертификат после обучения',
                  'Возможность рассрочки'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name="Check" className="text-accent" size={18} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 h-auto animate-pulse-subtle"
                onClick={() => {
                  if (typeof window.ym !== 'undefined') {
                    window.ym(105952933, 'reachGoal', 'enroll_course_pricing');
                  }
                  const urlParams = new URLSearchParams(window.location.search);
                  const utmSource = urlParams.get('utm_source') || '';
                  const utmMedium = urlParams.get('utm_medium') || '';
                  const utmCampaign = urlParams.get('utm_campaign') || '';
                  const utmContent = urlParams.get('utm_content') || '';
                  const utmTerm = urlParams.get('utm_term') || '';
                  let refUrl = 'https://ihclick.ru/?p=272195&o=272212&idp=314945&erid=2VtzqvHfAQk';
                  if (utmSource) refUrl += `&utm_source=${encodeURIComponent(utmSource)}`;
                  if (utmMedium) refUrl += `&utm_medium=${encodeURIComponent(utmMedium)}`;
                  if (utmCampaign) refUrl += `&utm_campaign=${encodeURIComponent(utmCampaign)}`;
                  if (utmContent) refUrl += `&utm_content=${encodeURIComponent(utmContent)}`;
                  if (utmTerm) refUrl += `&utm_term=${encodeURIComponent(utmTerm)}`;
                  window.open(refUrl, '_blank');
                }}
              >
                Начать обучение
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Преимущества курса
            </h2>
            <p className="text-lg text-gray-600">
              Почему студенты выбирают наш курс
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'GraduationCap',
                title: 'Практический подход',
                description: 'Создаете реальные проекты с первого урока. Все знания сразу применяете на практике.'
              },
              {
                icon: 'Users',
                title: 'Поддержка 24/7',
                description: 'Куратор ответит на вопросы в течение 2 часов. Общий чат с единомышленниками.'
              },
              {
                icon: 'Award',
                title: 'Сертификат',
                description: 'После успешного завершения получите сертификат для портфолио и резюме.'
              },
              {
                icon: 'Video',
                title: 'HD качество',
                description: 'Все уроки в Full HD качестве. Четкая картинка и профессиональный звук.'
              },
              {
                icon: 'Clock',
                title: 'Гибкий график',
                description: 'Учитесь в удобное время. Доступ к урокам 24/7 на протяжении 6 месяцев.'
              },
              {
                icon: 'TrendingUp',
                title: 'От простого к сложному',
                description: 'Структурированная программа от базовых инструментов до сложных проектов.'
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={benefit.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/f3a29e0a-731d-43b6-9c24-0db014135783.jpg)'}}></div>
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              Программа курса
            </h2>
            <p className="text-lg text-gray-600">
              4 модуля • 15 уроков
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { num: '01', title: 'Основы ArchiCAD', lessons: '4 урока', topics: ['Интерфейс', 'Инструменты', 'Чертежи'] },
              { num: '02', title: '3D моделирование', lessons: '4 урока', topics: ['3D объекты', 'Материалы', 'Освещение'] },
              { num: '03', title: 'Визуализация', lessons: '4 урока', topics: ['Рендер', 'Постобработка', 'Презентация'] },
              { num: '04', title: 'Проекты', lessons: '3 урока', topics: ['Сложные проекты', 'Портфолио'] }
            ].map((module, idx) => (
              <Card key={idx} className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 group-hover:scale-110 transition-all duration-300">{module.num}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{module.title}</h3>
                        <span className="text-sm text-gray-500">{module.lessons}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, i) => (
                          <span key={i} className="text-sm bg-gray-100 px-3 py-1 rounded-full group-hover:bg-primary/10 transition-colors">
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

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Работы студентов
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/60c3ac1a-54c3-4767-94c4-428e9c5e9dbb.jpg',
                title: 'Современный коттедж',
                author: 'Александра М.'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/3a0db252-736f-4c0b-b36d-de47cd58b882.jpg',
                title: 'Загородный дом',
                author: 'Дмитрий К.'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/4dde6b1d-7484-4759-8917-b11d0737a735.jpg',
                title: 'Деревянный коттедж',
                author: 'Елена В.'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/4fce0f73-9b7b-41dd-8652-9e95c810f339.jpg',
                title: 'Архитектурный проект',
                author: 'Максим П.'
              }
            ].map((work, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{work.title}</h3>
                  <p className="text-sm text-gray-600">Автор: {work.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Отзывы студентов
            </h2>
            <p className="text-lg text-gray-600">
              500+ выпускников работают в 3D визуализации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Александра М.',
                role: '3D дизайнер',
                text: 'Курс превзошел все ожидания! За 3 месяца освоила программу и работаю над коммерческими проектами.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/342b868c-b375-4960-809f-44c672e6ff53.jpg'
              },
              {
                name: 'Дмитрий К.',
                role: 'Архитектор',
                text: 'Отличная структура и поддержка. Ирина объясняет сложные вещи простым языком.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/8828c92f-d4c0-4d74-8f56-c4b461a2006c.jpg'
              },
              {
                name: 'Елена В.',
                role: 'Дизайнер интерьера',
                text: 'Благодаря курсу увеличила свой доход в 2 раза. Теперь могу создавать проекты любой сложности.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/55ab1e43-0afa-4d8f-bc37-d5e47e33eb64.jpg'
              },
              {
                name: 'Максим П.',
                role: 'Фрилансер',
                text: 'Получил первый заказ еще до окончания курса. Материал структурирован идеально.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/eb4a3c1f-3e2f-409f-a18f-91df99839bfb.jpg'
              },
              {
                name: 'Ольга С.',
                role: 'Архитектор',
                text: 'Лучшее вложение в свое образование. Курс окупился за первый месяц работы.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/0cd4555f-e07e-44e1-857f-da57e3b9a6d6.jpg'
              },
              {
                name: 'Игорь Н.',
                role: '3D визуализатор',
                text: 'Профессиональный подход и качественная подача материала. Рекомендую всем начинающим.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/d67f2737-b4d9-425a-be30-c36e1e7e3a56.jpg'
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={review.photo}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;