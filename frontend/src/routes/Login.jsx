import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => { localStorage.clear(); }, []);

  function handleSubmit() {
    localStorage.setItem('login', JSON.stringify(user));
    navigate('/');
  }

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">
            NOME
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu usário"
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <button type="submit">Logar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
