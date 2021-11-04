import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Mainhome from './components/Mainhome';
// import Loading from './components/Loading'
import Signup from './components/Signup'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext'
import { Component } from 'react';
import Signin from './components/SignIn';
import PrivateRoute from './routes/PrivateRoute';
import PrivateRoute2 from './routes/PrivateRoute2';
import PrivateRoute3 from './routes/PrivateRoute3';
import ServiceProvider from './components/ServiceProvider';
import ServiceProviderDetails from './components/ServiceProviderDetails';
import PayementSuccessful from './components/PayementSuccessful';
import PrivateRoute4 from './routes/PrivateRoute4';
import ForgotPassword from './components/ForgotPassword'
import Orderlist from './components/Orderlist';
import Profile from './components/Profile'

function App() {
  return (
  
      <div clahssName="App">
                <AuthProvider>

         <Router>
    <Switch>
        <PrivateRoute3 exact path ="/"  component={Signup}/>
        <PrivateRoute2 path = "/signin" component={Signin}/>
        <PrivateRoute2 path = "/forgot-password" component={ForgotPassword}/>

        <PrivateRoute path ="/home" component = {Mainhome}/>
        <PrivateRoute4  exact path="/payement" component = {PayementSuccessful} />
        <PrivateRoute4  exact path="/orderHistory" component = {Orderlist} />
        <PrivateRoute4  exact path="/ProfileUpdate" component = {Profile} />



    </Switch>

  </Router>
  </AuthProvider>

      </div>
  

  );
}

export default App;
