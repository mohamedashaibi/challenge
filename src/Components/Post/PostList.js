import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import PostCard from './PostCard'
import './PostList.css'

function PostList() {
    
    const {id} = useParams()

    const[userId, setUserId] = useState(id)
    
    const[posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/?userId="+ userId).then(response=>{setPosts(response.data)}).catch(err=>{console.log(err)})
    }, [])

    return (
        <div className="post-list">
            {posts.map((item, index)=>{
                return <PostCard key={index} post={item}/>
            })}
        </div>
    )
}

export default PostList
