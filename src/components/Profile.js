import React, {  useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form } from 'react-bootstrap';
import { firestore, firebaseAuth } from "../firebase";
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@mui/material';
let userData=[];
export default function FormDialog({history}) {


  const [open, setOpen] = React.useState(true);
  const [firstName, setfirstName] = React.useState(userData[0]);
  const [state, setstate] = React.useState(userData[1]);
  const [city, setcity] = React.useState(userData[2]);
  const [locality, setlocality] = React.useState(userData[3]);
  const [landmark, setLandmark] = React.useState(userData[4]);
  const [mobile, setMobile] = React.useState(userData[5]);
  const [altMobile, setaltMobile] = React.useState(userData[6]);
  const [flat, setFlat] = React.useState(userData[7]);
  const [pincode, setPicode] = React.useState(userData[8]);
  const [back, setback] = useState(true);


 
 useEffect(() => {
    
    firestore.collection('USERS').doc(firebaseAuth.getUid()).collection('USER_DATA').doc('MY_ADDRESSES').get().then((querrySnapshot) => {
      let display;

     display = querrySnapshot.data();
     setfirstName(display.name_1);
     setFlat(display.flat_Number_1);
     setstate(display.state_1);
     setPicode(display.pincode_1);
     setaltMobile(display.alternate_mobile_Number_1);
     setlocality(display.locality_1);
     setLandmark(display.landmark_1);
     setMobile(display.mobile_Number_1)
     setcity(display.city_1)
     setback(false)
   })
 },back);



 const handleChangeoffirstName = (event) => {
    setfirstName( event.target.value );
  }; 

  const  handleChangeofState = (event) => {
    setstate(event.target.value);
  };
  const  handleChangeofCity = (event) => {
    setcity(event.target.value);
  };
 const handleChangeofPincode = (event) => {
    setPicode(event.target.value);
  };
 const handleChangeofLocality = (event) => {
    setlocality( event.target.value);
  };
 const handleChangeofLandmark = (event) => {
    setLandmark(event.target.value);
  };
 const handleChangeofMobile_no = (event) => {
    setMobile( event.target.value);
  };
 const handleChangeofAlt_mob_no = (event) => {
    setaltMobile(event.target.value);
  };
 const handleChangeofFlat = (event) => {
    setFlat(event.target.value );
  };
  
const handleSubmit=()=>{
  
   firestore.collection('USERS').doc(firebaseAuth.getUid()).collection('USER_DATA').doc('MY_ADDRESSES').set({
    alternate_mobile_Number_1:altMobile,
    city_1:city,
    state_1:state,
    name_1:firstName,
    mobile_Number_1:mobile,
    flat_Number_1:flat,
    pincode_1:pincode,
    locality_1:locality,
    landmark_1:landmark
  }).then(()=>{
    alert('PROFILE UPDATED SUCCESSFULLY')
  }).then(()=>{
    history.push('/home')
  })

}

  const handleClose = () => {
    setOpen(false);
    history.push('/home')
  };

  return (
    <div>
      {console.log(userData[6])}
      {console.log(altMobile)}
      {console.log(firstName)}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Profile Update</DialogTitle>
        <DialogContent>
<Form>
  <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder={firstName} onChange={handleChangeoffirstName}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder={state} onChange={handleChangeofState}/>
  </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder={city} onChange={handleChangeofCity}/>
  </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Pincode</Form.Label>
    <Form.Control type="text" placeholder={pincode} onChange={handleChangeofPincode}/>
  </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Locality</Form.Label>
    <Form.Control type="text" placeholder={locality} onChange={handleChangeofLocality}/>
  </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Landmark</Form.Label>
    <Form.Control type="text" placeholder={landmark} onChange={handleChangeofLandmark}/>
  </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control type="text" placeholder={mobile} onChange={handleChangeofMobile_no}/>
  </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Alternate mobile number</Form.Label>
    <Form.Control type="text" placeholder={altMobile} onChange={handleChangeofAlt_mob_no}/>
  </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Flat address</Form.Label>
    <Form.Control type="text" placeholder={flat} onChange={handleChangeofFlat}/>
  </Form.Group> 
 
</Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Confirm</Button>
        </DialogActions>
      </Dialog>
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={back}
  
>
  <CircularProgress color="warning" />
</Backdrop>
    </div>
  );
}
