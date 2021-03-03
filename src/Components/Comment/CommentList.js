import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostCard from '../Post/PostCard'
import CommentCard from './CommentCard'

function CommentList() {
    
    const {id} = useParams()

    const[comments,setComments] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments/?postId="+ id).then(response=>{setComments(response.data)}).catch(err=>{console.log(err)})
    }, [])
    return (
        <div>
            {comments.map((item,index)=>{
                return <CommentCard key={index} comment={item}/>
            })}
        </div>
    )
}

export default CommentList
