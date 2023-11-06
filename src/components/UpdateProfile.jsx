import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
    const loadedUser = useLoaderData();
    const [user, setUser] = useState(loadedUser);
    const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const updatedData = { name, address }
        console.log(updatedData)
        fetch(`http://localhost:4000/updateProfile/${user._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(updatedData)
        }
        
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUser(data.user)
            if(data.result.matchedCount > 0){
                toast('User Updated Successfully');
            }
           
        })



       setTimeout( () => {
        navigate('/users')
       },1000)
    }
    return (
        <div>
            <h1>UPDATE PROFILE of {user?.name}</h1>
            <form onSubmit={handleUpdate}>
                <input defaultValue={user?.name} type="text" name="name" id="" />
                <br />
                <input defaultValue={user?.address} type="text" name="address" id="" />
                <br />
                <input type="submit" value="Update Profile" />
            </form>
            <ToastContainer autoClose={1000}/>
        </div>
    );
};

export default UpdateProfile;