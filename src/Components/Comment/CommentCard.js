import React, { useState } from 'react'
import './CommentCard.css'

function CommentCard(props) {
    const[comment, setComment] = useState(props.comment)
    return (
        <div className="commnt-card">
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>

        </div>
    )
}

export default CommentCard
