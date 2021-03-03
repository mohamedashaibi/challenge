import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import './UserList.css'

function UserList() {

    const[users,setUsers]= useState([])
    const[error, setError] = useState("")
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{setUsers(response.data)}).catch(err=>setError(err.toString()))
    }, [])
    
    return (
        <div className="user-list">
            {users.map((item,index)=>{
                return <UserCard key={index} user={item}/>
            })}
        </div>
    )
}

export default UserList
