import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleUser = () => {
    const loadedUser = useLoaderData()
    return (
        <div>
            {
                loadedUser ? <><h1>Name: {loadedUser.name}</h1><h1>Address: {loadedUser.address}</h1><h1>ID: {loadedUser.id}</h1><Link to='/users'>Users</Link></>
                : <h1>Sorry!! NO user Belong this id.</h1>
            }
        </div>
    );
};

export default SingleUser;