import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className='min-h-screen bg-white text-gray-900 font-sans'>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
