import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import { FaShareAlt } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const handleSearch = (searchTerm) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };
  const displayPosts = filteredPosts.length > 0 ? filteredPosts : posts;

  return (
    <div>
      <Navbar />
      <h2>Social Media for Travellers</h2>
      <SearchBar onSearch={handleSearch} />
     <div className='grid-container'>
      {displayPosts.map((post) => (
       
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

export default Home;
