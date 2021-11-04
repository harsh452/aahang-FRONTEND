import { Card, Button, Form, Alert, Container, Row, Col } from 'react-bootstrap'
import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { AppBar, Dialog, Slide, Toolbar, Typography } from '@material-ui/core';
import Signin from './SignIn';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { firebaseAuth, firestore } from '../firebase';
import cash from '../images/aahang-logo.png'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const password_confirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [emailChange, setEmailChange] = useState('')
    const [firstChange, setfirstChange] = useState('')
    const [lastChange, setlastChange] = useState('')
    const [Gender, setGender] = useState('')





    let userData = ["MY_WISHLIST", "MY_RATINGS", "MY_ADDRESSES", "MY_NOTIFICATIONS"]

    function senData() {


        firestore.collection('USERS').doc(firebaseAuth.getUid()).set({
            "Build Version": "",
            "Last seen": null,
            "Manufacture": "",
            OTP: 0,
            PinCode: "",
            "Serial Number": "",
            email: emailChange,
            profile: "",
            service_id: "",
            first_name: firstChange,
            fullName: firstChange + " " + lastChange,
            gender:Gender
        }).then(() => {
            for (var x = 0; x < userData.length; x++) {
                firestore.collection('USERS').doc(firebaseAuth.getUid()).collection("USER_DATA").doc(userData[x]).set({ "list_size": 0 })
            }
        }).then(()=>{
            firestore.collection('USERS').doc(firebaseAuth.getUid()).collection("USER_DATA").doc('MY_ADDRESSES').set({ 
                alternate_mobile_Number_1:'',
                mobile_Number_1:'',
                city_1:'',
                state_1:'',
                pincode_1:'',
                name_1:firstChange,
                flat_Number_1:'',
                locality_1:'',
                landmark_1:''
            })

        })



    }

    async function handleSubmit(e) {
        var k;
        e.preventDefault()

        if (passwordRef.current.value !== password_confirmRef.current.value) {
            return setError('Password do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            senData()
            k=1

        } catch {
            setError('failed to crete account')
        }
        setLoading(false)
        if(k){
            history.push("/home")
        }

    }

    return (
        <Dialog fullScreen open={true} TransitionComponent={Transition}>

            <Container style={{ textAlign: "center" }}>
                <div className=" text-center mt-4" style={{ height: "500px", width: "950px", margin: "0 auto", padding: "20px", paddingTop: '90px' }}>
                    <Row>
                        <Col style={{ marginTop: "30px", padding: '30px', boxShadow: ' 0 10px 15px rgba(0,0,0,0.3)' }}>
                            <span>
                                <h2 className="text-center mb-4">Sign Up</h2>

                                {error && <Alert variant="danger">{error}</Alert>}

                                <Form onSubmit={handleSubmit} >
                                    <Form.Row>
                                        <Form.Group style={{ marginRight: '10px' }}>
                                            <Form.Label>
                                                First Name
                                         </Form.Label>
                                            <Form.Control required value={firstChange}
                                                onChange={e => setfirstChange(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>
                                                Last Name
                                         </Form.Label>
                                            <Form.Control required value={lastChange}
                                                onChange={e => setlastChange(e.target.value)} />

                                        </Form.Group>

                                    </Form.Row>
                                    <Form.Group>
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control 
                                        as = 'select'
                                        defaultValue="MALE"
                                        onChange={e =>setGender(e.target.value)}>
                                        
                                            <option>FEMALE</option>
                                            <option>MALE</option>
                                        </Form.Control>
                                    </Form.Group>


                                    <Form.Group id="email">
                                        <Form.Label>
                                            Email
                                         </Form.Label>
                                        <Form.Control type="email" ref={emailRef} required value={emailChange}
                                            onChange={e => setEmailChange(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>
                                            password
                                          </Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Form.Group id="password-confirm">
                                        <Form.Label>
                                            confirm-password
                                          </Form.Label>
                                        <Form.Control type="text" ref={password_confirmRef} required />
                                    </Form.Group>
                                    <Button variant="warning" className="w-50" type="submit">Sign Up</Button>
                                </Form>
                                <div className="w-100 text-center mt-3">
                                    <Link style={{ textDecoration: 'none' }} to="/signin">Already have an account?Log in</Link>
                                </div>
                            </span>
                        </Col>
                        <Col>
                            <img style={{ width: '350px', marginTop: '100px' }} src={cash}></img>
                        </Col>
                    </Row>

                </div>


            </Container>
        </Dialog>


    )
}
