import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
    const { userId } = useParams()
    const [user, setUser] = useState([])
    const navigate = useNavigate()  
    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [user])

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const updatedData = { name, address }
        console.log(updatedData)
        fetch(`http://localhost:4000/updateProfile/${userId}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(updatedData)
        }
        
        )
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount > 0){
                toast('User Updated Successfully');
            }
           
        })



       navigate('/users');
    }
    return (
        <div>
            <h1>UPDATE PROFILE</h1>
            <form onSubmit={handleUpdate}>
                <input defaultValue={user.name} type="text" name="name" id="" />
                <br />
                <input defaultValue={user.address} type="text" name="address" id="" />
                <br />
                <input type="submit" value="Update Profile" />
            </form>
            <ToastContainer autoClose={1000}/>
        </div>
    );
};

export default UpdateProfile;