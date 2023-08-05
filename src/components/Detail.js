import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Loading...</div>;
  }

  const [displayType, setDisplayType] = useState('post'); // 'post' or 'user'

  return (
    <div>
      <Navbar />
      <div className='Selected-post'>
        <div className='img-div'>
          <img src={post.imgSrc} alt="Post" />
        </div>
       
     
        <div className='info'>
          <div className='buttons'>
            <button onClick={() => setDisplayType('post')}>Detail</button>
            <button onClick={() => setDisplayType('user')}>UserInfo</button>
          </div>
          {displayType === 'post' ? (
            <p>{post.body}</p>
          ) : (
            <p>This Post is Created by {post.id}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
