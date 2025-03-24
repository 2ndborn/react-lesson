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
        setIsLoaded(true);
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);
    }

  return (
    <div>
        {isLoaded ? (
            <MyPostAPI savedPosts={posts} />
        
        ) : (
            <h2>Loading...</h2>
        )}
        

    </div>
  )
}

export default MyRequestHooks