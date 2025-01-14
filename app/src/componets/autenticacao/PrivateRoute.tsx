import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const { user, isGoogleLogin } = useAuth();

  if (!user || !isGoogleLogin) {
    // Se o usuário não estiver logado ou não tiver feito login com o Google, redireciona para a página de login
    return <Navigate to="/" replace />;
  }

  // Se o usuário estiver logado e fez login com o Google, renderiza o componente
  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
