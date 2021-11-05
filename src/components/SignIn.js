import { Card, Button, Form, Alert, Container, Col, Row } from 'react-bootstrap'
import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { AppBar, Dialog, Slide, Toolbar, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import cash from '../images/aahang-logo.png'
import '../css/signin.css'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Signin() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e) {

        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/home")
        } catch {
            setError('failed to login')
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
            <Container style={{ textAlign: "center" }}>
                <div className="signin-cont  text-center mt-4" style={{ height: "500px", margin: "0 auto", padding: "20px", paddingTop: '50px' }}>
                    <Row>
                        <Col>
                            <img style={{ width: '300px' }} src={cash}></img>
                        </Col>
                        <Col style={{ marginTop: "10px",marginBottom:'20px', padding: '30px', boxShadow: ' 0 10px 15px rgba(0,0,0,0.3)' }}>
                            <span>
                                <h2 className="text-center mb-4">Log In</h2>

                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit} >
                                    <Form.Group id="email">
                                        <Form.Label>
                                            Email
                          </Form.Label>
                                        <Form.Control style={{ borderRadius: '50px' }} type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>
                                            password
                          </Form.Label>
                                        <Form.Control style={{ borderRadius: '50px' }} type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Button variant='warning' style={{ marginRight: '40px', borderRadius: '10px' }} className="w-40" type="submit">Login now</Button>

                                    <Button variant='warning' style={{ borderRadius: '10px' }} className="w-40" href="/">Sign up</Button>

                                </Form>
                                <div className="w-100 text-center mt-3">
                                    <Link style={{ textDecoration: 'none' }} to="/forgot-password">Forgot Password?</Link>
                                </div>
                            </span>
                        </Col>
                    </Row>

                </div>

            </Container>
        </Dialog>


    )
}
