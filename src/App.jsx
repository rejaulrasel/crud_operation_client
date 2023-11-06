import { useEffect, useState } from 'react';
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
function App() {

  // const [selectedImage, setSelectedImage] = useState(null);
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedImage(file);
  //   console.log(file)
  // };



  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const user = { name, address }




    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          toast('User added Succesfully')
          form.reset()
        }
      })



      
  }


  
  return (
    <>
      <h1>USER MANAGEMENT</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="text" name="address" id="" />
        <br />
        {/* <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      /> */}
        <br />
        <input type="submit" value="Add User" />
      </form>
      <Link to='/users'>Users</Link>
      <ToastContainer autoClose={1000}/>
      {/* {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
      )} */}
    </>
  )
}

export default App
