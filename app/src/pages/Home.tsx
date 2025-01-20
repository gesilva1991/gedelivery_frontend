import React, { useEffect } from 'react';
import { useAuth } from '../componets/autenticacao/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navigation from '../componets/navbar';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();
  const { token, userInfo } = location.state || {};
  const navigate = useNavigate();

  

  return (
    <div>
      <Navigation title="Home" user_name={userInfo.name}/>
      <h1>Bem-vindo! Obrigado por acessar</h1>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Home;
