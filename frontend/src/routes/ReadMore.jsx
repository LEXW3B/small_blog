import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteBtn from '../components/DeleteBtn';
import GoTo from '../components/GoTo';
import blogFetch from '../axios/config';

function ReadMore() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState();
  const [reload, setReload] = useState();

  async function getPost(ids) {
    const { data } = await blogFetch.get(`/posts/${ids}`);
    setPost(data);
  }

  useEffect(() => async () => {
    await getPost(id);
  }, [reload]);

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

  return (
    <div className="read-more">
      {!post ? (
        <p>Post não encontrado</p>
      ) : (post.map((posts) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p className="span-container">
            <span>{`${posts.owner} `}</span>
            <span>{getDate(posts.created_at)}</span>
          </p>
          <p className="quebra-linha">{posts.body}</p>
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

export default ReadMore;
