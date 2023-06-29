import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/NavBar.css';
// função para limpar o local storage e redirecionar para a pagina de login
function NavBar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">DevBlog</Link>
      </h2>
      <h4 className="bem-vindo">{`Welcome ${JSON.parse(localStorage.getItem('login'))}`}</h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Deslogar</Link>
        </li>
        <li>
          <Link to="/new" className="new-btn">Novo Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
