import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string; picture: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLoginSuccess = async (credentialResponse: any) => {

    try {
      console.log("Token ID:", credentialResponse.credential);
      const token = credentialResponse.credential;

      // Envia o token ao backend para validação
      const response = await axios.post("http://127.0.0.1:8000/auth/google-login/", {
        "id_token": token
      });

      setUser(response.data.user_info); // Salva os dados do usuário
      setError(null); // Limpa erros

    }
    
      
      catch (err) {
      setError("Erro ao autenticar no servidor.");
    }
    

  };

  const handleLoginError = () => {
    setError("Erro ao fazer login com o Google.");
  };

  return (
    <GoogleOAuthProvider clientId="38639244049-4j8el60ek7b0qftigl86qmru2e7j7s4h.apps.googleusercontent.com">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login com Google</h1>

        {user ? (
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={user.picture}
              alt="Foto do usuário"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
            />
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
