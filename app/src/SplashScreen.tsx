import React, { useEffect, useState } from 'react';
import splash from './assets/splash.png'

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
    <div className="flex items-center justify-center ">
      <img src={splash} alt="Splash" className="h-screen   mb-4" />
    </div>
  );
};

export default SplashScreen;
