import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import ServiceProvider from './ServiceProvider'
import { BrowserRouter as Router } from 'react-router-dom';
import Videobanner from './Videobanner';
import Footer from './Footer';


export class Mainhome extends Component {
    render() {
        return (
            <div>
             <Header  />
             <Videobanner/>
             <Home />
             <Footer/>
            </div>
        )
    }
}

export default Mainhome
