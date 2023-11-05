import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleLoginForm = (evt) => {
    evt.preventDefault();

    setErrors(errors => ({ ...validateCredentials(credentials) }));
  };

  const validateCredentials = (credentials) => {
    let errors = {};

    if (credentials.username === '') {
      errors = Object.assign(errors, {
        username: 'This field is required',
      });
    }

    if (credentials.password === '') {
      errors = Object.assign(errors, {
        password: 'This field is required',
      });
    }

    return errors;
  }

  const handleInputChange = (evt) => {
    evt.persist()
    setCredentials(credentials => ({ ...credentials, [evt.target.name]: evt.target.value }));
  }

  return (
    <div className="flex flex-col justify-center h-screen w-full bg-slate-400">
    <form className="maz-w-[400px] w-full bg-cyan-200 mx-auto p-8 px-8 rounded-lg" onSubmit={handleLoginForm.bind(this)}>
      <h2 className="w-full text-center text-3xl text-gray-700 font-bold mb-6">LOGIN</h2>
      <section className="pl-6 pr-3 w-1/2">
        <div className="flex flex-col py-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Email
      </label>
        <input
          id="username"
          className={'border mt-2 p-2 rounded-lg text-gray-700 w-full focus:border-blue-500 focus:bg-slate-300 focus:outline-none' + (errors.hasOwnProperty('username') ? "border-red-500" : '')}
          name="username"
          type="text"
          placeholder="e.g. some.example"
          value={credentials.username}
          onChange={handleInputChange.bind(this)}
        />
        {errors.hasOwnProperty('username') &&
          <p class="text-red-500 text-xs italic">{errors.username}</p>
        }
        </div>
      </section>
      <section className="pl-3 pr-6 w-1/2">
        <div className="flex flex-col py-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
      </label>
        <input
          id="password"
          className={'border mt-2 p-2 rounded-lg text-gray-700 w-full focus:border-blue-500 focus:bg-slate-300 focus:outline-none' + (errors.hasOwnProperty('password') ? "border-red-500" : '')}
          name="password"
          type="password"
          placeholder="* * * * * * * *"
          value={credentials.password}
          onChange={handleInputChange.bind(this)}
        />
        {errors.hasOwnProperty('username') &&
          <p class="text-red-500 text-xs italic">{errors.username}</p>
        }
        </div>
      </section>
      <section className="flex justify-center px-6 mt-3 w-full">
        <p>
          <input type="checkbox" className="mr-2" /> Remember Me
        </p>
      </section>
      <section className="flex justify-center px-6 mt-3 w-full">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:border-none justify-center">
          Sign In
      </button>
      </section>
    </form>
    </div>
  );
}

export default Login;
