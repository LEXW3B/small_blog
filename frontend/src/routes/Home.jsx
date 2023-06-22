import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import blogFetch from '../axios/config';
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const response = await blogFetch.get('/posts');
      const { data } = response;

      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // if (!localStorage.getItem('login')) navigate('/login');
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? (
        <p>Nenhum post encontrado</p>
      ) : (posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p className='span-container'>
            <span>{`${post.owner}`}</span>
            <span>{`${post.created_at}`}</span>
          </p>
          <p className='quebra-linha'>
            {post.body.length > 120 ? `${post.body.substr(0, 120)}...` : post.body}
          </p>
        </div>
      )))}
    </div>
  );
}

export default Home;