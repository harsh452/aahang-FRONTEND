import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import fb from '../images/facebook.png'
import ins from '../images/instagram.png'
import yt from '../images/youtube.png'
import tw from '../images/twitter.png'
import { Toolbar } from '@material-ui/core'

export class Footer extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '400px', backgroundColor: 'black', textAlign: 'center' }}>
                <div style={{padding:'50px',color:'white'}}>
                    <h4>Aahang</h4>
                    <Nav  className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link style={{textDecoration:'none',color:'white'}} href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{textDecoration:'none',color:'white'}} eventKey="link-1">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{textDecoration:'none',color:'white'}} eventKey="link-2">policy</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Nav style={{margin:'10px'}} className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                         <img style={{width:'30px',height:'30px'}} src={fb}></img>
                        </Nav.Item>
                        <Nav.Item>
                        <img style={{width:'30px',height:'30px'}} src={tw}></img>
                        </Nav.Item>
                        <Nav.Item>
                        <img style={{width:'30px',height:'30px'}} src={ins}></img>
                        </Nav.Item>
                        <Nav.Item>
                            <img style={{width:'30px',height:'30px'}} src={yt}></img>
      
                        </Nav.Item>
                    </Nav>
                    <Toolbar />
                    <p>
                &copy; Copyright 2021 All rights reserved <br></br>
              </p>
                    <p>Hello welcome all of you to our website</p>
                </div>
            </div>
        )
    }
}

export default Footer
