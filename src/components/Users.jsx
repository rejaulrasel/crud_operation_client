import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


    const handleDelete = (_id) => {
        console.log('delete', _id)
        fetch(`http://localhost:4000/delete/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast('User Deleted Succesfully')
                    const remainingUsers = users.filter(user => user._id != _id)
                    setUsers(remainingUsers)
                }
            })


    }
    return (
        <div>
            <h1>Total User: {users.length}</h1>

            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.address} : <button onClick={() => handleDelete(user._id)}>DELETE</button>
                    <Link to={`/updateProfile/${user._id}`}>UPDATE</Link>
                    </p>)
                }
            </div>
            <ToastContainer autoClose={1000} />

        </div>
    );
};

export default Users;