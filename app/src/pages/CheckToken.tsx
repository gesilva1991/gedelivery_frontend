import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../componets/navbar';

export const CheckToken: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken();

    if (token) {
      setAccessToken(token); // Armazena o token no estado
      fetchUserInfo(token); // Chama a função para obter as informações do usuário
    }
  }, []); // Esse useEffect roda apenas uma vez

  const getAccessToken = () => {
    const params = new URLSearchParams(window.location.hash.substring(1)); // Remove o '#'
    return params.get('access_token');
  };

  const fetchUserInfo = async (accessToken: string) => {
    try {
      // Realiza a requisição assíncrona para obter as informações do usuário
      const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      setUserInfo(data); // Atualiza o estado com as informações do usuário

      // Depois que userInfo é atualizado, navegue para a próxima página
      navigate('/home', { state: { accessToken, userInfo: data } });

    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error);
    }
  };

  return (
    <div>
      <Navigation title="Check-Token" />
      <h1>Checando Token</h1>
    </div>
  );
};
