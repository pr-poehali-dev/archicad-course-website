import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactAndFooter = () => {
  const handleCTAClick = () => {
    if (typeof window.ym !== 'undefined') {
      window.ym(105952933, 'reachGoal', 'start_learning_footer');
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
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Icon name="Rocket" size={64} className="mx-auto text-primary mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Готовы начать обучение?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к курсу ArchiCAD и начните создавать профессиональные проекты уже через 3 месяца
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Icon name="Clock" size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">15 уроков</h3>
                <p className="text-gray-600 text-sm">Структурированная программа обучения</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Icon name="Users" size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">500+ выпускников</h3>
                <p className="text-gray-600 text-sm">Довольных студентов с 2008 года</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Icon name="Award" size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Сертификат</h3>
                <p className="text-gray-600 text-sm">После завершения курса</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-12 py-6 h-auto animate-pulse-subtle"
              onClick={handleCTAClick}
            >
              <Icon name="GraduationCap" className="mr-2" size={24} />
              Начать обучение
            </Button>
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
            className="bg-primary hover:bg-primary/90 text-lg px-8 animate-pulse-subtle"
            onClick={() => {
              if (typeof window.ym !== 'undefined') {
                window.ym(105952933, 'reachGoal', 'view_all_courses');
              }
              window.open('https://ihclick.ru/?idp=314945&link=/catalog/', '_blank');
            }}
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