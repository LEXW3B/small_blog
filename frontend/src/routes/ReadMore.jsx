import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import blogFetch from '../axios/config';
import DeleteBtn from '../components/DeleteBtn';
import GoTo from '../components/GoTo';
import '../css/routes/ReadMore.css';

function ReadMore() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState();
  const [reload, setReload] = useState(false);

  async function getPost(ids) {
    const { data } = await blogFetch.get(`/posts/${ids}`);

    setPost(data);
  }

  const deletePost = async (posts) => {
    await blogFetch.delete(`/posts/${posts}`);
    setReload(!reload);
    navigate('/');
  };

  function getDate(date) {
    const [data, hora] = date.split('T');
    const hour = hora.substr(0, 8);
    const newVariavel = `${data} ${hour}`;
    const newDate = new Date(newVariavel);
    const longMonth = newDate.toLocaleString('pt-br', { month: 'long' });
    return `${newDate.getDate()} de ${longMonth} ás ${hour}`;
  }

  useEffect(() => async () => {
    await getPost(id);
  }, [reload]);

  return (
    <div className="read-more">
      <h1>Detalhes do post</h1>
      {!post ? (
        <p>Post não encontrado</p>
      ) : (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p className="span-container">
            <span>{`${post.owner} `}</span>
            <span>{getDate(post.created_at)}</span>
          </p>
          <p className="quebra-linha">{post.body}</p>
          <div className="container-btn">
            <GoTo post={post} deletePost={deletePost} />
            <DeleteBtn post={post} deletePost={deletePost} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ReadMore;
