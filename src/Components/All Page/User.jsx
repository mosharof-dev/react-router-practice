import React, { Suspense, useState } from 'react';
import { Link, Navigate,  } from 'react-router';
import UserDetails from './UserDetails';


const User = ({user}) => {
const {id,name, email, phone} = user;
const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
const [showInfo , SetInfo] = useState(false)
const [visitHome , setHome] = useState(false)
if(visitHome){
    return <Navigate to={'/Home'}></Navigate>
}
    return (
        <div>
            <div className='border m-4 p-4 rounded-xl bg-[#000080]'>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <Link to={`/user/${id}`}><button className='btn '>
                    Show Details</button></Link>

                <button className='bg-[#40eb34] p-1 m-1 rounded-xl ' onClick={()=> SetInfo(!showInfo)}>{showInfo ? "Hide": "Show"}</button>
                {
                    showInfo && <Suspense fallback={"Loading"}>
                          <UserDetails  userPromise={userPromise}></UserDetails>
                    </Suspense>
                }
                   

            </div>
            <button onClick={() => setHome(true)}>Visit Home</button>
            
        </div>
    );
};

export default User;