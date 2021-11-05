import { Box, Drawer, Fab } from '@material-ui/core';
import React, { Component } from 'react'
import cash from '../images/aahang-logo.png'
import NavigationIcon from '@mui/icons-material/Navigation';
import '../css/Topbanner.css'
export class Topbanner extends Component {

    render() {
        return (


            <div style={{ width: '100%', textAlign: 'center', objectFit: 'fill' }}>
                <img className="img-cont" src={cash}></img>
              
            </div>
        )
    }
}

export default Topbanner
