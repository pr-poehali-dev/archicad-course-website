import Header from '@/components/Header';
import HeroAndStats from '@/components/HeroAndStats';
import MainContent from '@/components/MainContent';
import ContactAndFooter from '@/components/ContactAndFooter';

const Index = () => {
  const handleCTAClick = () => {
    if (typeof window.ym !== 'undefined') {
      window.ym(105952933, 'reachGoal', 'start_learning');
    }
    
    // Получаем UTM-метки из URL страницы
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || '';
    const utmMedium = urlParams.get('utm_medium') || '';
    const utmCampaign = urlParams.get('utm_campaign') || '';
    const utmContent = urlParams.get('utm_content') || '';
    const utmTerm = urlParams.get('utm_term') || '';
    
    // Базовая реферальная ссылка
    let refUrl = 'https://ihclick.ru/?p=272195&o=272212&idp=314945&erid=2VtzqvHfAQk';
    
    // Добавляем UTM-метки, если они есть
    if (utmSource) refUrl += `&utm_source=${encodeURIComponent(utmSource)}`;
    if (utmMedium) refUrl += `&utm_medium=${encodeURIComponent(utmMedium)}`;
    if (utmCampaign) refUrl += `&utm_campaign=${encodeURIComponent(utmCampaign)}`;
    if (utmContent) refUrl += `&utm_content=${encodeURIComponent(utmContent)}`;
    if (utmTerm) refUrl += `&utm_term=${encodeURIComponent(utmTerm)}`;
    
    window.open(refUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCTAClick={handleCTAClick} />
      <HeroAndStats onCTAClick={handleCTAClick} />
      <MainContent />
      <ContactAndFooter />
    </div>
  );
};

export default Index;