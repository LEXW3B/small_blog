/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/routes/Login.css';
import MyContext from '../context/MyContext';

function Login() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { setOwner } = useContext(MyContext);

  function handleSubmit() {
    navigate('/');
    setOwner(user);
    // localStorage.setItem('login', JSON.stringify(user));
  }

  // useEffect(() => {
  //   setOwner('');
  //   localStorage.clear();
  // }, []);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="name">
          <label htmlFor="name">
            <p>LOGIN</p>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="USERNAME"
            onChange={({ target }) => setUser(target.value)}
          />
        </div>
        <button type="submit">Signin</button>
      </form>
    </div>
  );
}

export default Login;
