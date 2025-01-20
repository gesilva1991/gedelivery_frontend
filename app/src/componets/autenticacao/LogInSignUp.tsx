// import React, { useState } from "react";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// import axios from "axios";
// import entrega from "../../assets/entrega.png";

// const LoginPage: React.FC = () => {
//   const [user, setUser] = useState<{
//     name: string;
//     email: string;
//     picture: string;
//   } | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Função de login do contexto

//   const handleLoginSuccess = async (credentialResponse: any) => {
//     try {
//       console.log(credentialResponse.credential)
//       const token = credentialResponse.credential;

//       // Envia o token ao backend para validação
//       const response = await axios.post(
//         "https://gedeliverybackend-production.up.railway.app/auth/google-login/",
//         {
//           id_token: token,
//         }
//       );

//       setUser(response.data.user_info); // Salva os dados do usuário
//       setError(null); // Limpa erros
//       login(response); // Define que o login foi feito com o Google
//       navigate("/home");

//     } catch (err) {
//       setError("Erro ao autenticar no servidor.");
//     }
//   };

//   const handleLoginError = () => {
//     setError("Erro ao fazer login com o Google.");
//   };

//   return (
//     <GoogleOAuthProvider clientId="38639244049-4j8el60ek7b0qftigl86qmru2e7j7s4h.apps.googleusercontent.com">
//       <div className="bg-gray-100 flex flex-col items-center justify-start min-h-screen w-screen sm:h-auto px-16 py-4 text-center">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6" translate="no">
//           GeDelivery
//         </h1>
//         <img src={entrega} alt="Imagem do entregador" className="mx-auto md:w-[25%]" />

//         <div className="">
//           <GoogleLogin
//             onSuccess={handleLoginSuccess}
//             onError={handleLoginError}
//             useOneTap={false}
//           />
//           { user?.name}
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// import axios from "axios";
// import entrega from "../../assets/entrega.png";

// const LoginPage: React.FC = () => {
//   const [user, setUser] = useState<{
//     name: string;
//     email: string;
//     picture: string;
//   } | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Função de login do contexto

//   const handleLoginSuccess = async (credentialResponse: any) => {
//     try {
//       console.log(credentialResponse.credential)
//       const token = credentialResponse.credential;

//       // Envia o token ao backend para validação
//       const response = await axios.post(
//         "https://gedeliverybackend-production.up.railway.app/auth/google-login/",
//         {
//           id_token: token,
//         }
//       );

//       setUser(response.data.user_info); // Salva os dados do usuário
//       setError(null); // Limpa erros
//       login(response); // Define que o login foi feito com o Google
//       navigate("/home");

//     } catch (err) {
//       setError("Erro ao autenticar no servidor.");
//     }
//   };

//   const handleLoginError = () => {
//     setError("Erro ao fazer login com o Google.");
//   };

//   return (
//     <GoogleOAuthProvider clientId="38639244049-4j8el60ek7b0qftigl86qmru2e7j7s4h.apps.googleusercontent.com">
//       <div className="bg-gray-100 flex flex-col items-center justify-start min-h-screen w-screen sm:h-auto px-16 py-4 text-center">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6" translate="no">
//           GeDelivery
//         </h1>
//         <img src={entrega} alt="Imagem do entregador" className="mx-auto md:w-[25%]" />

//         <div className="">
//           <GoogleLogin
//             onSuccess={handleLoginSuccess}
//             onError={handleLoginError}
//             useOneTap={false}
//           />
//           { user?.name}
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default LoginPage;

import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";

const LoginWithGoogle = () => {
  const googleClientId ="38639244049-4j8el60ek7b0qftigl86qmru2e7j7s4h.apps.googleusercontent.com";
  const redirectUri = "http://127.0.0.1:5173/check-token"
  
  
  // Efeito para verificar se estamos na página de callback
  useEffect(() => {
      handleGoogleAuthResponse();

  }, []);

  
  // Função para redirecionar o usuário para a página de login do Google
  const handleLoginClick = async () => {
    const token = localStorage.getItem("authToken");

    try {
      // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=token&scope=profile email`;
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=token&scope=profile email&prompt=select_account`;

      // Redirecionamento para a URL do Google OAuth
      window.location.href = authUrl;

    } catch (error) {
      console.error("Erro ao tentar fazer login:", error);
    }
  };

  // Função para processar o token de autenticação ao voltar da página de redirecionamento
  const handleGoogleAuthResponse = () => {
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const token = urlParams.get("access_token");
    if (token) {
      // localStorage.setItem("authToken", token); // Armazenar o token no localStorage
      console.log("Login bem-sucedido, token:", token);

      // Aqui você pode adicionar a função onSuccess, que pode ser chamada após o login bem-sucedido.
      onSuccess(token);
    } else {
      console.error(
        "Falha na autenticação do Google. Nenhum token encontrado."
      );
    }
  };

  // Função para chamar após o login com sucesso
  const onSuccess = (token: string) => {
    console.log("Login com Google realizado com sucesso!");
    // Aqui você pode fazer qualquer outra ação com o token, como redirecionar para outra página ou fazer uma requisição ao backend.
  };

  
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div className="flex flex-col justify-center items-center h-screen">
        <button
          onClick={handleLoginClick}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Login com Google
        </button>
        <div className="w-[380px] h-6 flex-col justify-start items-center gap-2 inline-flex">
          <div className="self-stretch text-center">
            <span className="text-[#838383] text-xl font-normal font-['Poppins'] leading-normal">
              Não possui conta?{" "}
            </span>
            <button className="text-[#007dfc] text-xl font-normal font-['Poppins'] leading-normal">
              Register
            </button>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginWithGoogle;
