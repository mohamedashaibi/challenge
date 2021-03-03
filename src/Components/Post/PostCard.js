import React, { useState } from 'react'
import './PostCard.css'
import image from '../../iii.jpg'

function PostCard(props) {
    const[post, setPost] = useState(props.post)
    return (
        <div className="post-card">
            <img src={image} alt="img"/>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <a href={"/comments/" + post.id}>Comments</a>
        </div>
    )
}

export default PostCard
