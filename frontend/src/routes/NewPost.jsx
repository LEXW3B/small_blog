import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogFetch from '../axios/config';
import '../css/routes/NewPost.css';

function NewPost() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();
  const owner = JSON.parse(localStorage.getItem('login'));

  const createPost = async (e) => {
    e.preventDefault();

    await blogFetch.post('/posts', {
      owner,
      title,
      body,
      created_at: new Date(),
    });
    navigate('/');
  };

  return (
    <div>
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">
            Título:
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Digite o título"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="body">
            Conteúdo:
            <textarea name="body" id="body" placeholder="Digite o conteúdo" />
          </label>
          <input
            type="submit"
            value="Criar post"
            className="btn"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default NewPost;
