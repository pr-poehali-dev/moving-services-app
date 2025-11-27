import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Booking from '@/components/Booking';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Booking />
      <Gallery />
      <About />
      <FAQ />
      <Contacts />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;