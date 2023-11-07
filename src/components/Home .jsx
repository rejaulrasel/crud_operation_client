import '../App.css'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';




  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const id = form.id.value
    const user = { name, address,id }

    name && address && id ? fetch('http://localhost:4000/users', {
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
        }
        form.reset()
      })
     
      :
      alert('insert all field')



    
      
    


      
  }


const Home  = () => {
    return (
        <div>
            <h1>USER MANAGEMENT</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='name'/>
        <br />
        <input type="text" name="address" id="" placeholder='address'/>
        <br />
        <input type="number" name="id" id="" placeholder='id'/>

        <br />
        <input type="submit" value="Add User" />
      </form>
      <Link to='/users'>Users</Link>
      <ToastContainer autoClose={1000}/>
        </div>
    );
};

export default Home ;