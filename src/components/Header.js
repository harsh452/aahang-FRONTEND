import React, { useState, useEffect } from 'react'
import { Form, Navbar, NavDropdown, Button, Nav, FormControl, Container } from 'react-bootstrap'
import { Link, BrowserRouter as Router, Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Signup from './Signup';
import { useAuth } from "../context/AuthContext";
import { firestore, firebaseAuth } from "../firebase";
import cash from '../images/aahang-logo.png'
import man from '../images/man.png'
import getout from '../images/getout.png'
import order from '../images/order.png'
import { Backdrop, Box, CircularProgress, Drawer } from '@material-ui/core';
import Order from './Profile'
import update from '../images/update.png'
import women from '../images/wom.png'
import past from '../images/past.png'






export default function Header() {



  const [name, setName] = useState(null)
  const [gender, setGender] = useState('')
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [open, setOpen] = useState(false);
  const [back, setback] = useState(true);

  useEffect(() => {
  
      // firestore.collection('USERS').doc(firebaseAuth.getUid()).collection('USER_DATA').doc('MY_ADDRESSES').get().then((querrySnapshot) => {

      //   let display;
      //   display = querrySnapshot.data();
      //   setName(display.name_1);

      // })
        firestore.collection('USERS').doc(firebaseAuth.getUid()).get().then((querrySnapshot) => {
  
          let gender1;
          gender1 = querrySnapshot.data();
          setGender(gender1.gender)
          setName(gender1.first_name)
          setback(false)


      })
    
    
  });



  function image() {
    if (gender == 'MALE') {
      return <img
        alt=""
        src={man}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />
    } else if(gender =='FEMALE') {
      return <img
        alt=""
        src={women}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />
    }else{
      return null
    }
  }

  async function handlelogout() {
    setError('')
    try {
      await logout()
      return <Redirect to="/signin" />
    } catch {
      setError('failed to Logout')
    }
  }

  

  return (
    <div >

      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={cash}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
      Aahang
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {image()}
              <Nav.Link href="#pricing">Hi {name}</Nav.Link>
            </Nav>
            <Nav>
            <img
                alt=""
                src={past}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            <Nav.Link href="/orderHistory">Order History</Nav.Link>

              <img
                alt=""
                src={order}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <Nav.Link href="/payement">Hiring page</Nav.Link>
              <img
                alt=""
                src={getout}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <Nav.Link eventKey={2} onClick={handlelogout}>
                Log out
      </Nav.Link>
              <img
                alt=""
                src={update}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
          <Nav.Link href='/ProfileUpdate'>
        Update Profile
       </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>

      </Navbar>
<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={back}
  
>
  <CircularProgress color="warning" />
</Backdrop>
    </div>

  )
}
