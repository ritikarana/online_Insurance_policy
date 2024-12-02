import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
  return (
    <div>
      <h1>Insurance Portal</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <LoginForm />
        <RegisterLink><Link to={"/register"}>Click Here for Register</Link></RegisterLink>
      </div>
    </div>
  );
};

export default AuthPage;
