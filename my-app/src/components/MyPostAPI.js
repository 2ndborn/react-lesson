import React from 'react'

function MyPostAPI(props) {
    return (
        props.savedPosts.map(posts => {
            const { id, user, tags, videos: {small: {url}} } = posts
            return (
                < div key = { id } >
                <h3>{user}</h3>
                <video
                    width="320"
                    height="240"
                    controls
                >
                    <source src={url} type='video/mp4' alt="random" />

                </video>
                <p>{tags}</p>
            </div >
            )
            }   
        )
    )
}

export default MyPostAPI