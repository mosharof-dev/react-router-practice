import React from 'react';
import { useLoaderData } from 'react-router';
import './Details.css'; 

const Details = () => {
    const user = useLoaderData();
    // Destructuring missing data
    const { name, email, phone, website, address, company } = user;

    return (
        <div className="container">
            <h1 className="title">User Profile Details</h1>
            
            <article className="user-card">
                <div className="card-header">
                    <div className="avatar">{name.charAt(0)}</div>
                    <h2>{name}</h2>
                    <p className="company-name">{company.name}</p>
                </div>

                <div className="card-body">
                    <div className="info-item">
                        <strong>Email:</strong> <span>{email}</span>
                    </div>
                    <div className="info-item">
                        <strong>Phone:</strong> <span>{phone}</span>
                    </div>
                    <div className="info-item">
                        <strong>Website:</strong> <span className="web-link">{website}</span>
                    </div>
                    <div className="info-item">
                        <strong>Location:</strong> <span>{address.city}, {address.street}</span>
                    </div>
                </div>

                <div className="card-footer">
                    <button className="contact-btn">Message User</button>
                </div>
            </article>
        </div>
    );
};

export default Details;