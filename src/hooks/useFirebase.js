import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword,updateProfile ,  signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name , history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError(' '); 
            const newUser = {email, displayName: name}
            setUser(newUser);
            // save user to the database 
            saveUser(email, name, 'POST');
            // send name to firebase  after creation 
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });
            history.replace('/'); 
         
          })
          .catch((error) => {
            
            setAuthError( error.message);
            // ..
          })
          .finally( () => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) =>{
            setIsLoading(true);
             signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const destination  = location?.state?.from || '/';
                    history.replace(destination);
                    setAuthError(' ');  
                })
                .catch((error) => {
                   
                    setAuthError( error.message);
                })
                .finally( () => setIsLoading(false));
    }

    const signInUsingGoogle = (location, history) =>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // setUser(result.user);
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            setAuthError('');
            const destination  = location?.state?.from || '/';
                    history.replace(destination);
        }).catch((error) =>{
            setAuthError( error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // observe user state change

    useEffect( () => {
      const unsubscribed =  onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[auth])

    useEffect( () =>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then( () => { })
        .finally( () => setIsLoading(false));
    }
    

    // save User
    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('http://localhost:5000/users',{
            method: method,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return{
         user,
         admin,
         registerUser,
         loginUser,
         authError,
         isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;