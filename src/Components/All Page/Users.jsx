import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {

    const users = useLoaderData();
   
    return (
        <div>
            <h1 className='text-g'>This Is Users Section</h1>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;