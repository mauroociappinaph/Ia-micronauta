
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLocaleStore } from './stores/useLocaleStore';
import LandingPage from './pages/LandingPage';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import ChatWidget from './components/shared/ChatWidget';

// Intro Video Component
const IntroVideo: React.FC<{ onVideoEnd: (backgroundImage: string) => void }> = ({ onVideoEnd }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const video = document.querySelector('#intro-video') as HTMLVideoElement;
    if (video) {
      const handleVideoEnd = () => {
        // Capturar el último fotograma como imagen
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const backgroundImage = canvas.toDataURL('image/jpeg', 0.9);
          // Mantener la última escena por 1.5 segundos
          setTimeout(() => {
            setIsFading(true);
            // Esperar la transición fade (0.8s) antes de cambiar a landing
            setTimeout(() => {
              onVideoEnd(backgroundImage);
            }, 800);
          }, 1500);
        }
      };
      video.addEventListener('ended', handleVideoEnd);
      return () => video.removeEventListener('ended', handleVideoEnd);
    }
  }, [onVideoEnd]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <video
        id="intro-video"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/assets/videos/BgV2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const App: React.FC = () => {
  const { locale } = useLocaleStore();
  const [showIntro, setShowIntro] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const handleIntroEnd = (capturedImage: string) => {
    setBackgroundImage(capturedImage);
    setShowIntro(false);
  };

  return (
    <Router>
      {showIntro && <IntroVideo onVideoEnd={handleIntroEnd} />}
      {!showIntro && (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage backgroundImage={backgroundImage} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      )}
    </Router>
  );
};

export default App;
