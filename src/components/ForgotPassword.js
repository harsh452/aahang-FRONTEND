import { Card,Button,Form,Alert, Container, Col, Row } from 'react-bootstrap'
import React , {useRef, useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { AppBar, Dialog, Slide, Toolbar, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import cash from '../images/aahang-logo.png'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  
export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} =useAuth()
    const [error,setError] = useState('')
    const [message,setMessage] = useState('')

    const [loading,setLoading] = useState(false)
   async function handleSubmit(e) {
        
        e.preventDefault()
      
        try{
            setMessage('')
            setError('')
            setLoading(true)
           await resetPassword(emailRef.current.value)
            setMessage('An link has been send to your registered email')
        }catch{
            setError('failed to reset Password')
        }
        setLoading(false)
    }

    return (
        <Dialog fullScreen open={true} TransitionComponent={Transition}>
        {/* <AppBar style={{ position: "relative" }}>
            <Toolbar>

              <Typography variant="h6">
                Sound
              </Typography>

            </Toolbar>
          </AppBar> */}
          <Container style={{textAlign:"center"}}>
         <div className=" text-center mt-4" style={{height:"500px",width:"800px",margin:"0 auto",padding:"20px",paddingTop:'90px'}}>
             <Row>
                 <Col style={{marginTop:"30px",padding:'30px',boxShadow:' 0 10px 15px rgba(0,0,0,0.3)'}}>
                 <span>
                  <h2 className="text-center mb-4">Password reset</h2>
                  
                  {error && <Alert variant = "danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit} >
                      <Form.Group id="email">
                          <Form.Label>
                              Enter email
                          </Form.Label>
                          <Form.Control style={{borderRadius:'50px'}} type='email' ref={emailRef}  required />
                      </Form.Group>

                      <Button variant='warning' style={{borderRadius:'10px'}} className="w-40" type='submit'>Send Link</Button>

                  </Form>
                  <div className="w-100 text-center mt-3">
                 <Link style={{textDecoration:'none'}} to="/signin">Login</Link>
             </div>
                 </span>   
                 </Col>
                 <Col>
                <img style={{width:'300px',marginTop:'50px'}} src={cash}></img>
                 </Col>
             </Row>
                
         </div>
            
        </Container>
        </Dialog>

 
             )
}
