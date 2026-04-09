import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandBar from './components/BrandBar';
import Products from './components/Products';
import WhySayaka from './components/WhySayaka';
import Specs from './components/Specs';
import GlobalReach from './components/GlobalReach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-[#12121A] text-white">
      <Navbar />
      <main>
        <Hero />
        <BrandBar />
        <Products />
        <WhySayaka />
        <Specs />
        <GlobalReach />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
