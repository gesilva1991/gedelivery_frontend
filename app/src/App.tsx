import SplashScreen  from './componets/SplashScreen.tsx'
import LogInSignUp from './componets/autenticacao/LogInSignUp.tsx'
import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Função para inicializar o Google API
  const initializeGapi = () => {
    gapi.client.init({
      clientId: GOOGLE_CLIENT_ID,

      scope: '', // Defina o escopo necessário
    });
  };

  useEffect(() => {
    // Carrega o script da API do Google e inicializa o cliente
    gapi.load('client:auth2', initializeGapi);
  }, []); // O array vazio garante que isso seja feito apenas uma vez

  useEffect(() => {
    // Exibe a splash screen por 3 segundos
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer
  }, []);

  return (
    
    <div className="flex justify-center items-center ">
      <>
      {showSplash ? <SplashScreen /> : <LogInSignUp />}
      </>
    </div>
    
  );
};

export default App;
