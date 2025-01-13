import SplashScreen  from './SplashScreen.tsx'
import LogInSignUp from './LogInSignUp.tsx'
import React, { useState, useEffect } from 'react';



const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Exibe a splash screen por 3 segundos
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer
  }, []);

  return (
    
    <div className="bg-custom-green">
      <>
      {showSplash ? <SplashScreen /> : <LogInSignUp />}
    </>
    </div>
    
  );
};

export default App;
