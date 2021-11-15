import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>  res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setEmail(' ');
                setSuccess(true);
            }
            
        })

        e.preventDefault()
    }
    return (
        <div className=" make-admin">
            <h2>Make an Admin</h2>
            <br/>
            <form onSubmit={handleAdminSubmit}>
            <input type="email" onBlur={handleOnBlur} placeholder="Email"></input>
            <br/>
            <Button type="submit" className="make-admin-Button">Make Admin</Button>
            </form>
            {success && <Alert> Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;