import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
const {id,name, email, phone} = user;
    return (
        <div>
            <div className='border m-4 p-4 rounded-xl bg-[#000080]'>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <Link to={`/user/${id}`}><button className='p-4 bg-blend-color-burn'>
                    Show Details</button></Link>
            </div>
            
        </div>
    );
};

export default User;