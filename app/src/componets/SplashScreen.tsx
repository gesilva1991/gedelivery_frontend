import React, { useEffect, useState } from 'react';
import splash from '../assets/splash.png'

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Esconde a splash screen após 3 segundos
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-primary flex flex-col items-center justify-center h-screen w-full">
      <img src={splash} alt="Splash" className="max-w-full max-h-full object-contain" />
    </div>
  );
};

export default SplashScreen;
