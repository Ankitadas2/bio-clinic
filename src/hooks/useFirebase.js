import { getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
  const [name,setName]=useState('')
    const [user,setUser]=useState({})
    const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")
     const [isLogin,setIsLogin]=useState(false)
    const [isLoading,setIsLoading]=useState(true)
    const auth=getAuth()
    const googleProvider=new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
      setIsLoading(true)
       return signInWithPopup(auth,googleProvider)
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
    const toggoleLogin=e=>{
        setIsLogin(e.target.checked)
    }
    const handleName=e=>{
      setName(e.target.value)
    }
    const handleEmail=(e)=>{
      setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
      setPassword(e.target.value)
  }

  const handleRegister=()=>{
    isLogin?handleUserLogin(email,password):handleUserRegister(email,password)
  }

  
    const handleUserRegister = (e) => {
      // e.preventDefault()
      console.log(email,password)
     createUserWithEmailAndPassword(auth,email,password)
          .then((result) => {
              const user=result.user;
            console.log(user);
            setUserName()
            // e.preventDefault()
           
          })

          
      };
      const setUserName=()=>{
        updateProfile(auth.currentUser, {displayName:name})
        .then(res=>{})
        
      }
      const handleUserLogin = (e) => {
        // e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
              const user=result.user
            console.log(user);
            e.preventDefault()
           
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
        handleUserRegister,
        handleEmail,
        handlePassword,toggoleLogin,
        handleName,isLogin,
        handleRegister
    }
    }
    export default useFirebase;