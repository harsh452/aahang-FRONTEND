import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

export default function PrivateRoute4({component:Component,...rest}) {
    const {currentUser} = useAuth()
    return (
        <Route 
        {...rest}
        render={props =>{
        return currentUser?<Component {...props} />: <Redirect to ="/signin" />
        }}>
            
        </Route>
    )
}
