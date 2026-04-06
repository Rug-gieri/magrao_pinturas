import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import ReelsSection from '@/components/ReelsSection/ReelsSection';
import BioSection from '@/components/BioSection/BioSection';
import Footer from '@/components/Footer/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ReelsSection />
        <BioSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
