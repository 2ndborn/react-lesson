import axios from 'axios';
import React, {useState, useEffect} from 'react'
import API_KEY from '../secrets';
import MyPostAPI from './MyPostAPI';

function MyRequestHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        fetchedVideos();
    }, [])

    const fetchedVideos = async () => {
        const response = await axios.get(`https://pixabay.com/api/videos/?key=${API_KEY}&per_page=5&video_type=animation`)
        console.log(response)
        const fetchedPosts = response.data.hits;
        console.log(fetchedPosts)
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000)
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);
    }

    const handleChange = (e) => {
        // Get the input value from the search bar and convert it to lowercase for case-insensitive matching
        const name = e.target.value.toLowerCase();
    
        // Filter the savedPosts array to find posts where the 'user' field matches the input
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name);
        });
    
        // Update the 'posts' state with the filtered results
        setPosts(filteredPosts);
    };

  return (
    <div>
        <form>
            <label htmlFor='searchinput'>Search</label>
            <input 
            type='search'
            id='searchinput'
            onChange={(e) => handleChange(e)}
            placeholder='Search'
            />
        </form>
        <h3>Post: {posts.length}</h3>
        {isLoaded ? (
            <MyPostAPI savedPosts={posts} />
        
        ) : (
            <h2>Loading...</h2>
        )}
        

    </div>
  )
}

export default MyRequestHooks