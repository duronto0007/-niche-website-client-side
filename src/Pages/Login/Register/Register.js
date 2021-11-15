import React, { useState } from 'react';
import { Alert, Button, Spinner} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();
   
    const handleOnBlur = e =>{
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData ={...loginData};
         newLoginData[field] = value;
         setLoginData(newLoginData);
    }

    const handleLoginSumt = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Passwoed did not Match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    
    return (
        <div className="m-5">
            <h2>Please Register</h2>

            <div className="login-form">
           { !isLoading && <form onSubmit={handleLoginSumt}>

               <input name="name" onBlur={handleOnBlur} placeholder="Your Name"></input>     
               <input name="email" type="email" onBlur={handleOnBlur} placeholder="Email"></input>     
               <input name="password" onBlur={handleOnBlur} type="password" placeholder="Password"></input> 
               <input name="password2" onBlur={handleOnBlur} type="password" placeholder="ReType Password"></input> 
               
               <button type="submit" className="login-button">Register</button>   
            </form>}
            {isLoading && <Spinner animation="border" variant="danger" />}
            {user?.email && <Alert className="alert-bg">You have successfully Register!</Alert>}
            {authError && <Alert>{authError}</Alert>}
            </div>
            <br/>
            <Link to="/login"><Button className="btn-color" variant="outline-dark">Alreday Register? Please Login</Button></Link>
            <br/>
            <br/>
            
        </div>
    );
};

export default Register;