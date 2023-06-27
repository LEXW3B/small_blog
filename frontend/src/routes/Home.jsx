import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogFetch from '../axios/config';
import '../css/routes/Home.css';
import GoTo from '../components/GoTo';
import DeleteBtn from '../components/DeleteBtn';

function Home() {
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(false);

  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const response = await blogFetch.get('/posts');
      const { data } = response;

      setPosts(data);
    } catch (err) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Ocorreu um erro: ${err}`;
      document.body.appendChild(errorMessage);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('login')) navigate('/login');
    getPosts();
  }, []);

  const deletePost = async (post) => {
    await blogFetch.delete(`/posts/${post}`);
    setReload(!reload);
  };

  return (
    <div className="home">
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? (
        <p>Nenhum post encontrado</p>
      ) : (posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p className="span-container">
            <span>{`${post.owner}`}</span>
            <span>{`${post.created_at}`}</span>
          </p>
          <p className="quebra-linha">
            {post.body.length > 120 ? `${post.body.substr(0, 120)}...` : post.body}
          </p>
          <div className="container-btn">
            <GoTo post={post} deletePost={deletePost} />
            <DeleteBtn post={post} deletePost={deletePost} />
          </div>
        </div>
      )))}
    </div>
  );
}

export default Home;
