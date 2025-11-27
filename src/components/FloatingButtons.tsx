import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 flex flex-col gap-3 z-50 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
      }`}
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20BA5A] animate-bounce"
        onClick={() => window.open('https://wa.me/79991234567', '_blank')}
        style={{ animationDelay: '0s', animationDuration: '2s' }}
      >
        <Icon name="MessageCircle" size={24} />
      </Button>
      
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform bg-[#0088cc] hover:bg-[#006699] animate-bounce"
        onClick={() => window.open('https://t.me/gruzprofi', '_blank')}
        style={{ animationDelay: '0.2s', animationDuration: '2s' }}
      >
        <Icon name="Send" size={24} />
      </Button>
      
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform animate-bounce"
        onClick={() => window.open('tel:+79991234567')}
        style={{ animationDelay: '0.4s', animationDuration: '2s' }}
      >
        <Icon name="Phone" size={24} />
      </Button>
    </div>
  );
};

export default FloatingButtons;