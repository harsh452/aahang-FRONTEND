import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

export default function PrivateRoute2({component:Component,...rest}) {
    const {currentUser} = useAuth()
    return (
        <Route 
        {...rest}
        render={props =>{
        return currentUser?<Redirect to ="/home" />: <Component {...props} />
        }}>
            
        </Route>
    )
}
