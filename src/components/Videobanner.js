import { Box, Drawer, Fab } from '@material-ui/core';
import React, { Component } from 'react'
import cash from '../images/aahang-logo.png'
import NavigationIcon from '@mui/icons-material/Navigation';

export class Videobanner extends Component {

    render() {
        return (


            <div style={{ width: '100%', textAlign: 'center', objectFit: 'fill' }}>
                <img src={cash}></img>
              
            </div>
        )
    }
}

export default Videobanner
