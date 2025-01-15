import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from "axios";
import entrega from "../../assets/entrega.png";

const LoginPage: React.FC = () => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    picture: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Função de login do contexto

  const handleLoginSuccess = async (credentialResponse: any) => {
    try {
      console.log(credentialResponse.credential)
      const token = credentialResponse.credential;

      // Envia o token ao backend para validação
      const response = await axios.post(
        "http://192.168.1.6:8000/auth/google-login/",
        {
          id_token: token,
        }
      );

      setUser(response.data.user_info); // Salva os dados do usuário
      setError(null); // Limpa erros
      login(response); // Define que o login foi feito com o Google
      navigate("/home");
      
    } catch (err) {
      setError("Erro ao autenticar no servidor.");
    }
  };

  const handleLoginError = () => {
    setError("Erro ao fazer login com o Google.");
  };

  return (
    <GoogleOAuthProvider clientId="38639244049-4j8el60ek7b0qftigl86qmru2e7j7s4h.apps.googleusercontent.com">
      <div className="bg-gray-100 flex flex-col items-center justify-start min-h-screen w-screen sm:h-auto px-16 py-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6" translate="no">
          GeDelivery
        </h1>
        <img src={entrega} alt="Imagem do entregador" className="mx-auto md:w-[25%]" />

        <div className="">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
          { user?.name}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
