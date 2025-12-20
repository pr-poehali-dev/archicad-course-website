import { Card, CardContent } from '@/components/ui/card';
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
              <h2 className="text-4xl md:text-5xl font-bold">
                Ирина Бурцева
              </h2>
              <p className="text-lg text-gray-600">
                Практикующий 3D визуализатор интерьеров. Специалист по программам Archicad и 3D Max. 
                Основатель онлайн школы «Учитель дома».
              </p>
              <div className="space-y-3">
                {[
                  'Более 15 лет опыта в 3D визуализации',
                  'Создатель авторской методики обучения',
                  'Более 500 выпускников по всему миру',
                  'Индивидуальный подход к каждому студенту'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-primary" size={14} />
                    </div>
                    <span>{item}</span>
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
            <p className="text-xl text-white/90">
              15 уроков • 2-3 месяца • Доступ навсегда
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <div className="text-6xl font-bold text-primary mb-2">12 900 ₽</div>
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
              Всё для профессионального роста
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Laptop', title: 'Практика', desc: 'Реальные проекты с первого урока' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Ответы на вопросы в течение суток' },
              { icon: 'Briefcase', title: 'Трудоустройство', desc: 'Помощь в поиске работы' },
              { icon: 'Video', title: 'Видеоуроки', desc: 'Доступ навсегда' },
              { icon: 'FileCheck', title: 'Сертификат', desc: 'Официальный документ' },
              { icon: 'Rocket', title: 'Быстрый старт', desc: 'Проекты через 2 недели' }
            ].map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/4025bac0-9d71-4023-bd14-b89ddbe5df93.jpg)'}}></div>
        <div className="absolute inset-0 bg-white/75"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-primary/20">{module.num}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{module.title}</h3>
                        <span className="text-sm text-gray-500">{module.lessons}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, i) => (
                          <span key={i} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
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
                role: 'Фрилансер',
                text: 'Получила все навыки для работы. Теперь зарабатываю на визуализации удаленно.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/04250176-fb7e-4889-80e1-912da9662f4c.jpg'
              },
              {
                name: 'Максим П.',
                role: 'Студент',
                text: 'Программа отлично структурирована. Каждый урок - новые знания и практика.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/5a6a2565-6c8b-41a1-98b7-c6b3735648bc.jpg'
              },
              {
                name: 'Ольга С.',
                role: 'Дизайнер',
                text: 'Наконец-то освоила 3D! Теперь показываю клиентам реалистичные проекты.',
                photo: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/b97303af-d278-49d1-93e7-c21a79a9a5e8.jpg'
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={review.photo} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={14} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">"{review.text}"</p>
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
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/c348d25f-3457-43d7-96e4-ebed29457425.jpg',
                title: 'Современная гостиная',
                author: 'Александра М.'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/a0f2363e-56f2-4999-9039-4873086f087c.jpg',
                title: 'Кухня минимализм',
                author: 'Дмитрий К.'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/00a0a095-81c5-423b-93bc-3416d121a90f.jpg',
                title: 'Спальня',
                author: 'Елена В.'
              },
              {
                image: 'https://cdn.poehali.dev/projects/7710b90a-6ab5-4f28-96bc-4e8f387343b6/files/afeedc27-8145-4486-8f4d-30f84e23e4ac.jpg',
                title: 'Офис',
                author: 'Максим П.'
              }
            ].map((work, idx) => (
              <Card key={idx} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{work.title}</h3>
                  <p className="text-sm text-gray-500">Автор: {work.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Карьерные возможности
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Briefcase', title: 'Работа в студии' },
              { icon: 'Home', title: 'Фриланс' },
              { icon: 'TrendingUp', title: 'От 150 000 ₽' },
              { icon: 'Users', title: 'Свои проекты' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <Icon name={item.icon as any} className="mx-auto mb-3" size={32} />
                <h3 className="font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                { q: 'Нужен ли опыт?', a: 'Нет, курс для новичков.' },
                { q: 'Какой компьютер нужен?', a: 'Intel Core i5, 8 ГБ RAM, видеокарта 2 ГБ.' },
                { q: 'Сколько времени в день?', a: '2-3 часа в день, 2-3 месяца обучения.' },
                { q: 'Помощь в трудоустройстве?', a: 'Да, помогаем с портфолио и резюме.' },
                { q: 'Какой документ?', a: 'Сертификат о прохождении курса.' },
                { q: 'Рассрочка?', a: 'Да, через сервис Долями.' }
              ].map((faq, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
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