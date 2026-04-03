import React, { use } from 'react';

const UserDetails = ({ userPromise}) => {
    const user = use(userPromise)
  const {name, email, phone} = user;
    return (
        <div>
            <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;