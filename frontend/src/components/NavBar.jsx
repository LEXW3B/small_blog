import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/components/NavBar.css';
import MyContext from '../context/MyContext';

const onClick = () => {
  localStorage.clear();
  window.location.reload();
};

function NavBar() {
  const { owner } = useContext(MyContext);
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">DevBlog</Link>
      </h2>
      <h4 className="bem-vindo">{`Welcome ${owner}`}</h4>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login" onClick={onClick}>Deslogar</Link>
        </li>
        <li>
          <Link to="/new" className="new-btn">Novo Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
