import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    // console.log(users)

    const handleDelete = (_id) => {
        fetch(`http://localhost:4000/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('data deleted succesfully')
                    const remainingUsers = users.filter(user => user._id != _id)
                    setUsers(remainingUsers)
                }
            })


    }


    return (
        <div>
            <h1>total users : {users.length}</h1>
            <div>
                {
                    users.map(user =>
                        <>
                            <p key={user._id}>{user.name} : {user.address}: {user._id}</p>
                            <button onClick={() => handleDelete(user._id)} key={user._id} >DELETE</button>
                        </>
                    )
                }
            </div>

        </div>
    );
};

export default Users;