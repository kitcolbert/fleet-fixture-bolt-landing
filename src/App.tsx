import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const scrollToSignup = useCallback(() => {
    const el = document.getElementById('signup');
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSelectPlan = useCallback(
    (planName: string) => {
      setSelectedPlan(planName);
      scrollToSignup();
    },
    [scrollToSignup]
  );

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Navbar onGetStarted={scrollToSignup} />
      <main>
        <Hero onGetStarted={scrollToSignup} />
        <HowItWorks />
        <Pricing onSelectPlan={handleSelectPlan} />
        <EmailSignup selectedPlan={selectedPlan} />
      </main>
      <Footer />
    </div>
  );
}
