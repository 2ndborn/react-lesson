import axios from 'axios';
import React, {useState, useEffect} from 'react'
import API_KEY from '../secrets';

function MyRequestHooks() {
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        fetchedVideos();
    }, [])

    const fetchedVideos = async () => {
        const response = await axios.get(`https://pixabay.com/api/videos/?key=${API_KEY}&per_page=50`)
        console.log(response)
    }

  return (
    <div>
        {savedPosts.map(posts => 
            <div>{posts}</div>
        )}
    </div>
  )
}

export default MyRequestHooks