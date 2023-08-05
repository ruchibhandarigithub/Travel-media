import React from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { FaHeart,FaShareAlt, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((p) => p.id === parseInt(id));
 
  if (!post) {
    return <div>Loading...</div>;
  }
  let displayType='post';
  
  return (
    <div>
      <Navbar />
      <div className='Heading'>
        
        <Link to="/" >
            <FaArrowAltCircleLeft /> 
        </Link>
        <h2>Post Id :{post.id}</h2>
       
      </div>
      <div className='Selected-post'>
        <div className='img-div'>
          <img src={post.imgSrc} alt="Post" style={{ width: '100%', height: 'auto', borderRadius: '20px'}}/>
          <div className='bottom'>
            <div> {post.title}</div>
            <div className='icons2'>
              <FaHeart />
              <FaShareAlt />
            </div>
          </div>
        </div>
        <div className='info'>
          <div className='buttons'>
            <button className={displayType === 'post' ? 'active' : ''} >Detail</button>
            <button } >Detail</button>
          </div>
          
            <p>{post.body}</p>
         
        </div> 
      </div>
      <h2>
         MorePost
      </h2>
      <div className='grid-container'>
      {posts.slice(0,5).map((post) => (
       
          <div key={post.id} className='grid-item'>
            <Link to={`/item/${post.id}`} className='link-style'>
              <img src={post.imgSrc} alt="Post" />
             
                <h3>{post.title}</h3>
                <div className='data'>
                
                <p>{post.body.slice(0, 70)}..<span className='read-more'>Read More...</span></p>
               
                <div className='greaterthan'>
                <FaShareAlt /> 
                </div>
                
                </div>
              
          
                </Link>
          
          </div>
      
      ))}
      </div>

      
    </div>
  );
};

export default Detail;
