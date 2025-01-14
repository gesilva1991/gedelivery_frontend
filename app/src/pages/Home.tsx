import React, { useEffect } from 'react';
import { useAuth } from '../componets/autenticacao/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navigation from '../componets/navbar';

const Home: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redireciona para a página de login caso o usuário não esteja autenticado
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      <Navigation />
      <h1>Bem-vindo ao Home!</h1>
    </div>
  );
};

export default Home;
