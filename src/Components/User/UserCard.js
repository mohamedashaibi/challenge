import React, { useState } from 'react'
import  '@fortawesome/react-fontawesome'
import image from '../../user.png'
import './UserCard.css'

function UserCard(props) {
    const[user, setUser] = useState(props.user)
    return (
        <div className="user-card">
            <img src={image} alt="User logo"/>
            <h1>{user.name}</h1>
            <h2>{user.company.bs}</h2>
            <p>{user.company.catchPhrase}</p>
            <a href={"/posts/"+user.id}>Posts</a>
        </div>
    )
}

export default UserCard
