import { useEffect, useState } from 'react';
import LoginWithGoogle from './componets/autenticacao/LogInSignUp.tsx';
import { useAuth } from "./componets/autenticacao/AuthContext.tsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './pages/Home.tsx';




const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {

    const checkCookie = async () => {
      const url = 'http://127.0.0.1:8000/auth/check-cookie/';
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        

        // Verifica se há token no cookie
        if (!data){

        }
        
        setData(data); // Atualiza o estado com os dados da resposta
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Atualiza o estado com a mensagem de erro
        } else {
          setError('Erro desconhecido'); // Caso o erro não seja uma instância de Error
        }
      }
    }

    

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
          // setUser(data); // Armazena os dados do usuário no estado
        } catch (error) {
          console.error('Erro ao buscar dados do usuário', error);
        }
      } else {
        // Se não houver access_token, provavelmente o login ainda não foi feito
        console.log('Nenhum access_token encontrado na URL');
      }
    }
    checkCookie();
    fetchUserData()

  }, []); // Use o array vazio para que isso ocorra apenas uma vez, após o login.

  return (
    <GoogleOAuthProvider clientId="38639244049-4j8el60ek7b0qftigl86qmru2e7j7s4h.apps.googleusercontent.com">
    <div className="App">
      {(!data) ? (<LoginWithGoogle />  ) : (<Home />)}
        
    </div>
    </GoogleOAuthProvider>
  );
};

export default App;