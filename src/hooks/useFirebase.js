import { getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const auth=getAuth()
    const googleProvider=new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
      setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user)
        })
        .finally(()=> setIsLoading(false));
    }
    const logOut=()=>{
      setIsLoading(true)
        signOut(auth)
         .then(()=>{setUser({})
             setIsLoading(false)
         },[])
    }
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth,email,password)
          .then((result) => {
              const user=result.user;
            console.log(user);
          })
          .catch((error) => {
            // const errorMessage = error.message;
          });
      };
      const handleUserLogin = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
              const user=result.user
            console.log(user);
          })
          .catch((error) => {
            // const errorMessage = error.message;
          });
      };
   
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            setIsLoading(false)
          });
          
    },[])

   
    
    
    return{
        user,signInUsingGoogle,
        logOut,
        isLoading,
        handleUserLogin,
        handleUserRegister
    }
    }
    export default useFirebase;