import React,{useContext,useEffect, useState}from 'react'
import {firebaseAuth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return  useContext(AuthContext)
}

export  function AuthProvider({children}) {
 
    const [currentUser,setCurrentUser] = useState()
    const [loading,setLoading] = useState(true)

    function signup(email,password) {
       return firebaseAuth.createUserWithEmailAndPassword(email,password)

    }
 function login(email,password) {
    return firebaseAuth.signInWithEmailAndPassword(email,password)
    }

  function resetPassword(email) {
      return firebaseAuth.sendPasswordResetEmail(email)
  }  
    function logout() {
        return firebaseAuth.signOut()
    }
    useEffect (()=>{
       const unsubscribe =  firebaseAuth.onAuthStateChanged(user =>{
        setCurrentUser(user)

           setLoading(false)
        })
        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
