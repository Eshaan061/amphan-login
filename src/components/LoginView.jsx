import React from 'react';
import Login from '../components/Login';

const LoginView = () => (
  <main className="flex h-screen">
    <section className="w-1/2">
      <h1>Amphan</h1>
    </section>
    <section className="flex items-center w-1/2">
      <Login />
    </section>
  </main>
);

export default LoginView;
