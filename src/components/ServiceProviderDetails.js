import React, {  useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Backdrop, CircularProgress, Container } from '@material-ui/core';
import { Row, Col, Carousel, Card, Button ,Dropdown,Modal} from 'react-bootstrap';
import offer from '../images/offer.png'
import tag from '../images/tag.png'
import cash from '../images/cash-on-delivery.png'
import {  useHistory, Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { firestore,firebaseAuth } from "../firebase";
import '../css/details.css'

import StarIcon from '@material-ui/icons/Star';
import CheckoutPage, { PayementSuccessful } from './PayementSuccessful';



export const ServiceProviderDetails =(props) => {
  const history =useHistory({forceRefresh:true})
  const [price , setPrice] = useState(props.personDetails[5])
  const [error, setError] = useState('')


if(props.personDetails !== null ){

 async function handleClick(e) {
 
    firestore.collection('WEBSITE LIST').doc(firebaseAuth.getUid()).collection('PROVIDER LIST').get().then((snapshot)=>{
      console.log(snapshot.size);
      if(snapshot.size >= 1){
        alert('YOU CAN ONLY ADD 1 SERVICE PROVIDER AT A TIME');
      }else{
       console.log(props.personDetails[13])
        firestore.collection('WEBSITE LIST').doc(firebaseAuth.getUid()).collection('PROVIDER LIST').doc(props.personDetails[13]).set({
          money:price,
          providerID:props.personDetails[13],
          name:props.personDetails[0],
          totalRatings:props.personDetails[1],
          profilePhoto:props.personDetails[2],
          quantity:(price)/(props.personDetails[5]),
          totalPrice:price
        }) .then(()=>{
          alert('SERVICE PROVIDER SUCCESSFULLY ADDED TO HIRING PAGE');

        })
      }
    });
    
    
 
 
 }
 
     return (
 
 
       <div>
 
 { console.log(firebaseAuth.getUid()) }
 {console.log(props.personDetails)}
         <Dialog fullScreen open={true} >
 
           <Container style={{ backgroundColor: "white", textAlign: "center", padding: "25px",zIndex:'3800'}}>
 
 
             <Row>
 
               <Col style={{ justifyContent: "center", backgroundColor: "white", width: "100%",zIndex:'-1000' }}>
                 <Carousel style={{ transform: 'translate3d(0,0,0)' }} slide={false} indicators={false} controls={false}>
                   <Carousel.Item style={{ transform: 'translate3d(0,0,0)' }}>
                     <img
                       style={{ transform: 'translate3d(0,0,0)' }}
                       className="h-50 d-block w-100 transform :'translate3d(0,0,0)'"
                       src={props.personDetails[2]}
                       alt="First slide"
                     />
                     {/* <Carousel.Caption>
                       <h4>{this.props.personDetails[0]}</h4>
                       <p>{this.props.personDetails[1]}<StarIcon style={{ color: 'green' }} /></p>
                       <p>RS {this.props.personDetails[5]}/-</p>
                     </Carousel.Caption> */}
                   </Carousel.Item>
                   <Carousel.Item >
                     <img
                     
                       className="h-50 d-block w-100"
                       src={props.personDetails[3]}
                       alt="Second slide"
                     />
 
                     {/* <Carousel.Caption >
                       <h4>{this.props.personDetails[0]}</h4>
                       <p>{this.props.personDetails[1]}<StarIcon style={{ color: 'green', transform: 'translate3d(0,0,0)' }} /></p>
                       <p>RS {this.props.personDetails[5]}/-</p>
                     </Carousel.Caption> */}
                   </Carousel.Item>
                   <Carousel.Item>
                     <img
                   
                       className=" d-block w-100"
                       src={props.personDetails[4]}
                       alt="Third slide"
                     />
 {/* 
                     <Carousel.Caption >
                       <h4>{this.props.personDetails[0]}</h4>
                       <p>{this.props.personDetails[1]}<StarIcon style={{ color: 'green' }} /></p>
                       <p>RS {this.props.personDetails[5]}/-</p>                    </Carousel.Caption> */}
                   </Carousel.Item>
                 </Carousel>
                 <br></br>
                 <div style={{ width: '40%', height: "inherit", textAlign: "center" }}>
 
                   <p><img style={{ height: "50px", width: '50px'}} src={cash}
                   ></img>Pay on service available</p>
                 </div>
                 <hr></hr>
                 <br></br>
                 <Card style={{ width: '70%', height: "inherit", borderRadius: '60px' }}>
 
                   <Card.Title><img style={{ height: "50px", width: '50px' }} src={offer}
                   ></img>Daily Offer</Card.Title>
                   <Card.Text>
                     RS 50 OFF on this Service provider
                     </Card.Text>
                 </Card>
                 <br></br>
 
                 <Card style={{ width: '70%', height: "inherit", borderRadius: '60px' }}>
 
                   <Card.Title><img style={{ height: "50px", width: '50px' }} src={tag}
                   ></img>Description</Card.Title>
                   <Card.Text>
                     {props.personDetails[11]}
                   </Card.Text>
                 </Card>
                 <br></br>
 
                 <Card style={{ width: '70%', height: "inherit", borderRadius: '60px', padding: "30px" }}>
                   Ratings
                       <Card.Title>{props.personDetails[1]}<StarIcon style={{ color: 'green' }} /></Card.Title>
                   <Row>
                     <Col>
                       <div style={{
                         height: 9,
                         width: '100%',
                         backgroundColor: "#e0e0de",
                         borderRadius: 50,
                         marginTop: 20,
                         transform: 'translate3d(0,0,0)'
                       }}>
                         <div style={{
                           height: '100%',
                           width: `${props.personDetails[10]}%`,
                           backgroundColor: "orange",
                           borderRadius: 'inherit',
                           textAlign: 'right',
                           transform: 'translate3d(0,0,0)'
                         }}>
 
                         </div>
                       </div></Col>
                     <Col style={{ marginTop: 10, transform: 'translate3d(0,0,0)' }}>
                       <span style={{
                         color: 'black',
                         transform: 'translate3d(0,0,0)'
                       }}>5<StarIcon style={{ color: 'green', transform: 'translate3d(0,0,0)' }} /></span>({props.personDetails[10]})</Col>
                   </Row>
                   <Row>
                     <Col>
                       <div style={{
                         height: 9,
                         width: '100%',
                         backgroundColor: "#e0e0de",
                         borderRadius: 50,
                         marginTop: 20,
                         transform: 'translate3d(0,0,0)'
                       }}>
                         <div style={{
                           height: '100%',
                           width: `${props.personDetails[9]}%`,
                           backgroundColor: "orange",
                           borderRadius: 'inherit',
                           textAlign: 'right',
                           transform: 'translate3d(0,0,0)'
                         }}>
 
                         </div>
                       </div></Col>
                     <Col style={{ marginTop: 10, transform: 'translate3d(0,0,0)' }}>
                       <span style={{
                         marginTop: 30,
                         transform: 'translate3d(0,0,0)',
                         color: 'black',
                       }}>4<StarIcon style={{ color: 'green', transform: 'translate3d(0,0,0)' }} /></span>({props.personDetails[9]})</Col>
                   </Row>
                   <Row>
                     <Col>
                       <div style={{
                         height: 9,
                         width: '100%',
                         backgroundColor: "#e0e0de",
                         borderRadius: 50,
                         marginTop: 20,
                         transform: 'translate3d(0,0,0)'
                       }}>
                         <div style={{
                           height: '100%',
                           width: `${props.personDetails[8]}%`,
                           backgroundColor: "orange",
                           borderRadius: 'inherit',
                           textAlign: 'right',
                           transform: 'translate3d(0,0,0)'
                         }}>
 
                         </div>
                       </div></Col>
                     <Col style={{ marginTop: 10, transform: 'translate3d(0,0,0)' }}>
                       <span style={{
                         marginTop: 30,
                         transform: 'translate3d(0,0,0)',
                         color: 'black',
                       }}>3<StarIcon style={{ color: 'green', transform: 'translate3d(0,0,0)' }} />({props.personDetails[8]})</span></Col>
                   </Row>
                   <Row>
                     <Col>
                       <div style={{
                         height: 9,
                         width: '100%',
                         backgroundColor: "#e0e0de",
                         borderRadius: 50,
                         marginTop: 20,
                         transform: 'translate3d(0,0,0)'
                       }}>
                         <div style={{
                           height: '100%',
                           width: `${props.personDetails[7]}%`,
                           backgroundColor: "orange",
                           borderRadius: 'inherit',
                           textAlign: 'right',
                           transform: 'translate3d(0,0,0)'
                         }}>
 
                         </div>
                       </div></Col>
                     <Col style={{ marginTop: 10, transform: 'translate3d(0,0,0)' }}>
                       <span style={{
                         marginTop: 30,
                         transform: 'translate3d(0,0,0)',
 
                         color: 'blacK',
                       }}>2<StarIcon style={{ color: 'green', transform: 'translate3d(0,0,0)' }} />({props.personDetails[7]})</span></Col>
                   </Row>
                   <Row>
                     <Col>
                       <div style={{
                         height: 9,
                         width: '100%',
                         backgroundColor: "#e0e0de",
                         borderRadius: 50,
                         marginTop: 20,
                         transform: 'translate3d(0,0,0)'
                       }}>
                         <div style={{
                           height: '100%',
                           width: `${props.personDetails[6]}%`,
                           backgroundColor: "orange",
                           borderRadius: 'inherit',
                           textAlign: 'right',
                           transform: 'translate3d(0,0,0)'
                         }}>
 
                         </div>
                       </div></Col>
                     <Col style={{ marginTop: 10, transform: 'translate3d(0,0,0)' }}>
                       <span style={{
                         marginTop: 30,
 
                         color: 'black',
                       }}>1<StarIcon style={{ color: 'green', transform: 'translate3d(0,0,0)' }} />({props.personDetails[6]})</span></Col>
                   </Row>
                 </Card>
 
               </Col>
               <Col>
 
                 <div style={{ marginTop: "50px", position: 'sticky', top: '0' }}>
 
                   <Card style={{ width: '70%', height: "inherit", borderRadius: '60px', padding: "30px"}}>
                 
     <Card.Title>Rs {price} </Card.Title>
                     <Row>
                       <Col>
                         <div style={{
                           height: 'inherit',
                           width: '100%',
                       
                           borderRadius: 50,
                           marginTop: 20,
                         }}>
                         
                       
                          <Dropdown className="dropbtn">
                   <Dropdown.Toggle variant="success" id="dropdown-basic">
 
                       Quantity                  
                    </Dropdown.Toggle>
 
                   <Dropdown.Menu  >
                     <Dropdown.Item className="dropdown-content"onClick={ 
                          (e) =>setPrice(e.target.innerText * props.personDetails[5])
                       } >1</Dropdown.Item>
                     <Dropdown.Item className="dropdown-content"onClick={ 
                          (e) =>setPrice(e.target.innerText * props.personDetails[5])
                         } >2</Dropdown.Item>
                     <Dropdown.Item className="dropdown-content"onClick={ 
                          (e) =>setPrice(e.target.innerText * props.personDetails[5])
                         }>3</Dropdown.Item>
                     
                   </Dropdown.Menu>
                 </Dropdown>
                         
 
                       
                         </div>
                         </Col>
                       
                     </Row>
                     <Row>
                       <Col>
                         <div style={{
                           height: 'inherit',
                           width: '100%',
                           borderRadius: 50,
                           marginTop: 20,
                         }}>
                           <h5>Your Address</h5><br></br>
                             <span>
                              E-75 3rdc ,khetri ,Gothra,Rajasthan (333504)                              
                             </span>
                         </div></Col>
                      
                     </Row>
                     <Row>
                      
                       <Col style={{ height: 'inherit',
                           width: '100%',
                           borderRadius: 50,
                           marginTop: 20, }}>
                               <Button onClick={
                                 handleClick
                               }  variant='warning'>Add to hiring page</Button>
 
 
 
                         </Col>
                     </Row>
                     
                   </Card>
 
                 </div>
 
               </Col>
             </Row>
 
           </Container>
 
         </Dialog>
       </div>
     );
}else{
  history.push("/home")
  window.location.reload(true)
}
 
  }




export default ServiceProviderDetails


