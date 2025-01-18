// import SplashScreen  from './componets/SplashScreen.tsx'
// import LogInSignUp from './componets/autenticacao/LogInSignUp.tsx'
// import React, { useState, useEffect } from 'react';
// import { gapi } from 'gapi-script';

// const GOOGLE_CLIENT_ID = import.meta.env.REACT_APP_GOOGLE_CLIENT_ID || "";

// const App: React.FC = () => {
//   const [showSplash, setShowSplash] = useState(true);

//   // Função para inicializar o Google API
//   const initializeGapi = () => {
//     gapi.client.init({
//       clientId: GOOGLE_CLIENT_ID,
//       scope: '', // Defina o escopo necessário
//     });
//   };

//   useEffect(() => {
//     // Carrega o script da API do Google e inicializa o cliente
//     gapi.load('client:auth2', initializeGapi);
//   }, []); // O array vazio garante que isso seja feito apenas uma vez

//   useEffect(() => {
//     // Exibe a splash screen por 3 segundos
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 3000);

//     return () => clearTimeout(timer); // Limpa o timer
//   }, []);

//   return (
    
//     <div className="flex justify-center items-center ">
//       <>
//       {showSplash ? <SplashScreen /> : <LogInSignUp />}
//       </>
//     </div>
    
//   );
// };

// export default App;




/// src/App.tsx



import { useEffect, useState } from 'react';
import LoginWithGoogle from './componets/autenticacao/LogInSignUp';



const App = () => {
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      // Verifica se há um token de acesso na URL após o redirecionamento
      const params = new URLSearchParams(window.location.hash.replace('#', '?'));
      const accessToken = params.get('access_token');

      if (accessToken) {
        // Exemplo de chamada para obter informações do usuário
        try {
          const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          
          const data = await response.json();
          setUser(data); // Armazena os dados do usuário no estado
          console.log(data);
        } catch (error) {
          console.error('Erro ao buscar dados do usuário', error);
        }
      } else {
        // Se não houver access_token, provavelmente o login ainda não foi feito
        console.log('Nenhum access_token encontrado na URL');
      }
    };

    fetchUserData();
  }, []); // Use o array vazio para que isso ocorra apenas uma vez, após o login.

  return (
    <div className="App">
      {/* {user ? (
        <div>
          <h1>Bem-vindo, {user.name}</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : ( */}
        <LoginWithGoogle />
      {/* )} */}
    </div>
  );
};

export default App;
