import Header from '@/components/Header';
import HeroAndStats from '@/components/HeroAndStats';
import MainContent from '@/components/MainContent';
import ContactAndFooter from '@/components/ContactAndFooter';

const Index = () => {
  const handleCTAClick = () => {
    if (typeof window.ym !== 'undefined') {
      window.ym(105952933, 'reachGoal', 'start_learning');
    }
    window.open('https://ihclick.ru/?p=272195&o=272212&idp=314945&erid=2VtzqvHfAQk', '_blank');
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