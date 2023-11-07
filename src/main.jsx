import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users.jsx';
import UpdateProfile from './components/UpdateProfile.jsx'
import SingleUser from './components/SingleUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:4000/users')
  },
  {
    path: "/updateProfile/:userId",
    element: <UpdateProfile></UpdateProfile>,
    loader: ({params}) => fetch(`http://localhost:4000/users/${params.userId}`)
  },
  {
    path: '/users/singleUser/:id',
    element: <SingleUser></SingleUser>,
    loader: ({params}) => fetch(`http://localhost:4000/users/singleUser/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
