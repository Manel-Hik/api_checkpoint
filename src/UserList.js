import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'


const UserList = () => {
    const [listOfUsers, setlistOfUsers] = useState([])
    useEffect(() => {
        function fetchData(){
            axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res=>{
                const users = res.data;
                setlistOfUsers(users);

        })
        .catch(function (error) {
            //handle error here
            console.log("erreur msg:", error)
        })
        

    }
    fetchData();
 });

    return (
        <div className="liste"> 
            {listOfUsers.map(el=>
                <div>{el.name}</div>)}
        </div>
    )
}

export default UserList
