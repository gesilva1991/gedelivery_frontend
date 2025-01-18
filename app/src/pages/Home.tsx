import React, { useEffect } from 'react';
import { useAuth } from '../componets/autenticacao/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navigation from '../componets/navbar';

const Home: React.FC = () => {




  return (
    <div>
      <h1>Bem-vindo! Obrigado por acessar Lay</h1>
    </div>
  );
};

export default Home;
