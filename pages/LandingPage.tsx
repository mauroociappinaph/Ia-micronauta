
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import MethodologySection from '../components/sections/MethodologySection';
import ContactSection from '../components/sections/ContactSection';

const LandingPage: React.FC<{ backgroundImage?: string }> = ({ backgroundImage }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      const handleVideoEnd = () => {
        setShowContent(true);
      };
      video.addEventListener('ended', handleVideoEnd);
      return () => video.removeEventListener('ended', handleVideoEnd);
    }
  }, []);

  return (
    <div
      className="relative bg-background"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Decorative Lights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] bg-white/5 blur-[120px] rounded-full animate-float"></div>
      </div>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
