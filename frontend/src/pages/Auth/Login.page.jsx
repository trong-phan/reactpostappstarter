import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBoundStore from '../../store/Store';
import { AuthenticationImage } from './AuthenticationImage';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate('/posts');
    }
  }, [user]);

  const onLogin = async (e) => {
    e.preventDefault();
    let email = e.target.email?.value;
    let password = e.target.password?.value;
    if (!email || !password) return;
    loginService(email, password);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <AuthenticationImage onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
