import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A]"
        onClick={() => window.open('https://wa.me/79991234567', '_blank')}
      >
        <Icon name="MessageCircle" size={24} />
      </Button>
      
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform bg-[#0088cc] hover:bg-[#006699]"
        onClick={() => window.open('https://t.me/gruzprofi', '_blank')}
      >
        <Icon name="Send" size={24} />
      </Button>
      
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
        onClick={() => window.open('tel:+79991234567')}
      >
        <Icon name="Phone" size={24} />
      </Button>
    </div>
  );
};

export default FloatingButtons;
