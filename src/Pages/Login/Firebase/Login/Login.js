import React, { useState } from 'react';
import { Alert, Button, Spinner} from 'react-bootstrap';
import { Link, useLocation, useHistory  } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user, loginUser,signInUsingGoogle, isLoading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();
   
    const handleOnChange = e =>{
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData ={...loginData};
         newLoginData[field] = value;
         setLoginData(newLoginData);
    }

    const handleLoginSumt = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    // const {signInUsingGoogle} = useAuth()
    const handleGoogleSignIn = () =>{
        signInUsingGoogle(location, history)
    }
    return (
        <div className="m-5">
            <h2>Please Login</h2>

            <div className="login-form">
            <form onSubmit={handleLoginSumt}>

               <input name="email" onChange={handleOnChange} placeholder="Email"></input>     
               <input name="password" onChange={handleOnChange} type="password" placeholder="Password"></input> 
               
               <button type="submit" className="login-button">Login</button>   
               
            </form>
            </div>
            <br/>
            <Link to="/register"><Button className="btn-color" variant="outline-dark">New User? Please Register</Button></Link>
            {isLoading && <Spinner animation="border" variant="danger" />}
            {user?.email && <Alert>You have successfully LogIn!</Alert>}
            {authError && <Alert>{authError}</Alert>}
            <br/>
            <br/>
            <Button className="google-login" onClick={handleGoogleSignIn}>Google Sigin</Button>
        </div>
    );
};

export default Login;