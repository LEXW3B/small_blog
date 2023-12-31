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
      console.log(err);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('login')) navigate('/login');

    getPosts();
  }, [reload]);

  const deletePost = async (post) => {
    await blogFetch.delete(`/posts/${post}`);
    setReload(!reload);
  };

  function getDate(date) {
    const [data, hora] = date.split('T');
    const hour = hora.substr(0, 8);
    const newVariavel = `${data} ${hour}`;
    const newDate = new Date(newVariavel);
    const longMonth = newDate.toLocaleString('pt-br', { month: 'long' });
    return `${newDate.getDate()} de ${longMonth} ás ${hour}`;
  }

  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Que triste, nada postado ainda!</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p className="span-container">
              <span>{`${post.owner} `}</span>
              <span>{getDate(post.created_at)}</span>
            </p>
            <p className="quebra-linha">
              {post.body.length > 120
                ? `${post.body.substr(0, 120)} ...` : post.body}
            </p>
            <div className="container-btn">
              <GoTo post={post} deletePost={deletePost} />
              <DeleteBtn post={post} deletePost={deletePost} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
