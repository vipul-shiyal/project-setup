import { Navigate } from 'react-router-dom';

export const PrivateWrapper = ({ children }) => {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/" />;
};
