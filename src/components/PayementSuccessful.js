import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { firestore, firebaseAuth } from '../firebase';
import { Alert, Button, Container } from 'react-bootstrap'
import Avatar from '@material-ui/core/Avatar';
import { Box, Card, CardActions, CardContent, CardMedia, Drawer, Typography } from '@material-ui/core';


let profileimage;
let providerName;

function razorpay(src) {
  return new Promise((resolve) => {

    const script = document.createElement('script')
    script.src = src
    script.onload = (e) => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)

  })
}


async function displayRazorpay(e) {
  const res = await razorpay("https://checkout.razorpay.com/v1/checkout.js")
  if (!res) {
    alert('Razorpay failed to load')
    return
  }

  var m = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ e }),


  }

  const data = await fetch('http://localhost:1337/razorpay', m).then((k) =>
    k.json()
  )
  console.log(data)

  var options = {
    "key": "rzp_test_Rf4MoKgbOUCW3R",
    "amount": data.amount,
    "currency": "INR",
    "name": "Aahang",
    'image': 'sdadsd',
    "description": "payement",
    // "image": "https://example.com/your_logo",
    "handler": function (response) {

      firestore.collection('USERS').doc(firebaseAuth.getUid()).collection('USER_ORDERS').doc().set({
        order_id: response.razorpay_order_id,
        pay_id: '07886546' + Math.random() * 100,
        pay_mode: 'Online',
        photo: profileimage,
        pro_name: providerName
      }).then(() => {
        alert("PAYEMENT SUCCESSFUL PLEASE CHECK ORDERS PAGE FOR MORE INFORMATION");
      })
    },
    "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    // "prefill": {
    //     "name": "Gaurav Kumar",
    //     "email": "gaurav.kumar@example.com",
    //     "contact": "9999999999"
    // },
    "theme": {
      "color": "#3399cc"
    }
  };
  const payementObj = new window.Razorpay(options);
  payementObj.open();

}


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'orange',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




export class PayementSuccessful extends Component {

  constructor(props) {

    super(props)
    this.state = {
      providerList: null,
      value: 0,
      hire: [null],
      open: false,
      address: [null],
      id:'',
      deleted:false
    }

  }
  componentDidMount() {
    firestore.collection('WEBSITE LIST').doc(firebaseAuth.getUid()).collection('PROVIDER LIST').get()
      .then(querySnapshot => {
        var checkOutData = [];

        querySnapshot.forEach(doc => {
          checkOutData.push(doc.data())
        })
        console.log(checkOutData)
        this.setState({
          providerList: checkOutData
        });
      }).then(() => {
        this.checkHiredstate()
        this.checkAddress()

      })
  }

  //    orderData=(k)=> {




  // }

  handleValue = (e) => {
    this.setState({
      value: e
    }, () => {
      displayRazorpay(this.state.value);
    }
    );
  }

  checkHiredstate = (e) => {

    <>
      {console.log(this.state.providerList)},
      {  this.state.providerList ? this.state.providerList.map(data => {
        console.log(data.providerID);
        firestore.collection('SERVICE PROVIDER').doc(data.providerID).onSnapshot((doc) => {
          this.setState({
            hire: doc.get('hired'),
            id:doc.get('serviceID')
          })
        })

      }) : console.log("fdfes")}
    </>


  }

  checkAddress = (e) => {
    console.log(firebaseAuth.getUid());
    firestore.collection('USERS').doc(firebaseAuth.getUid()).collection('USER_DATA').doc('MY_ADDRESSES').get().then((querySnapshot) => {
      this.setState({
        address: querySnapshot.data()
      })
    })



  }

  toggleDrawer = (openDrawer) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ open: openDrawer });
    console.log(this.state.address);
  };

  list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      {() => {
        if (this.state.address == null) {
          return <div style={{ backgroundColor: 'red', height: '200px' }}>
            harsh
        </div>
        } else {
          return <div style={{ width: '300px', marginTop: '100px' }}>
            <Card sx={{ maxWidth: 245, padding: '20px' }}>
              <CardMedia
                component="img"
                height="inherit"
                image={profileimage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {
                    providerName
                  }    <br></br> Your address   </Typography>
                <Typography variant="body2" color="text.secondary">
                  Name - {this.state.address.name_1}<br />
                  State - {this.state.address.state_1}<br />
                  City - {this.state.address.city_1}<br />
                  Locality - {this.state.address.locality_1}<br />
                  Landmark - {this.state.address.landmark_1}<br />
                  Pincode - {this.state.address.pincode_1}<br />
                  Flat Address - {this.state.address.flat_Number_1}<br />
                  Mobile No. - {this.state.address.mobile_Number_1}<br />
                  Alternate Mobile No. - {this.state.address.alternate_mobile_Number_1}

                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="warning" size="small" onClick={
                  () => {
                    firestore.collection('USERS').doc(firebaseAuth.getUid()).collection('USER_ORDERS').doc().set({
                      order_id: '12175835' + Math.random() * 100,
                      pay_id: '35463432' + Math.random() * 100,
                      pay_mode: 'Offline',
                      photo: profileimage,
                      pro_name: providerName
                    }).then(() => {
                      alert('ORDER CONFIRMED PLEASE VISIT ORDER HISTORY FOR MORE INFO')
                    })
                  }
                }>CONFIRM</Button>
                <Button href="/ProfileUpdate" variant="warning" size="small">CHANGE ADDRESS</Button>
              </CardActions>
            </Card>

          </div>

        }
      }}

    </Box>
  );

  render() {


    return (
      <div>

        <Container>
          {console.log(this.state.hire)}
          <Alert style={{ textAlign: 'center', padding: '40px', marginTop: '20px' }} variant="success">
            <Alert.Heading>Hey, nice to see you .Welcome to hiring page</Alert.Heading>
            <p>
              In this page you can see  the service provider you wanted to hire .<br></br>
      The  service provider may vanish from the list as per there avaibility,<br></br>
      So make sure to hire them as soon as possible
      </p>
            <hr />

          </Alert>
         
          <TableContainer style={{ marginTop: '100px' }}>
          <div>
          <Button onClick={
            ()=>{
              firestore.collection('WEBSITE LIST').doc(firebaseAuth.getUid()).collection('PROVIDER LIST').doc(this.state.id).delete().then(()=>{
                alert('SERVICE PROVIDER SUCCESSFULLY DELETED')
                this.setState({
                  deleted:true
                })
              })
            }
          } variant='danger'>DELETE</Button>
          </div>
            <Table style={{ minWidth: '700px', }} aria-label="customized table">
              <TableHead >
                <TableRow >
                  <StyledTableCell align="left">Photo</StyledTableCell>
                  <StyledTableCell align='left'>Name</StyledTableCell>
                  <StyledTableCell align="right">Ratings</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Service charge</StyledTableCell>
                  <StyledTableCell align="right">Offline payement</StyledTableCell>
                  <StyledTableCell align="right">Online payement</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.providerList ? this.state.providerList.map(data => {
                  if (this.state.hire == false && this.state.deleted==false) {
                    profileimage = data.profilePhoto
                    providerName = data.name
                    return (
                      <StyledTableRow style={{ height: '150px' }} key={data.name}>
                        <StyledTableCell scope="row">
                          <Avatar alt="Remy Sharp" src={data.profilePhoto} style={{ width: '50px', height: '50px' }} />
                        </StyledTableCell>
                        <StyledTableCell >
                          {data.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{data.totalRatings}</StyledTableCell>
                        <StyledTableCell align="right">{data.quantity}</StyledTableCell>
                        <StyledTableCell align="right">{data.totalPrice}</StyledTableCell>
                        <StyledTableCell align="right"><Button onClick={this.toggleDrawer(true)} variant="warning">Pay on service</Button></StyledTableCell>
                        <StyledTableCell align="right">  <Button onClick={() => this.handleValue(data.money)} variant="warning">Online Pyement</Button></StyledTableCell>
                      </StyledTableRow>

                    );
                  } else {
                    return (
                      <Alert style={{ width: '100%', textAlign: 'center', marginTop: '20px' }} variant='danger'>
                        Have you added a service provider if yes than
                        Looks like service provider is either hired or unavailable!!
                      </Alert>

                    )
                  }

                }) : null}

              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        <Drawer
          anchor='right'
          open={this.state.open}
          onClose={this.toggleDrawer(false)}
        >
          {this.list({ anchor: 'right' })}
        </Drawer>
      </div>

    );
  }
}

export default PayementSuccessful











































// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import { FixedSizeList } from 'react-window';




























// // import { Button, Modal } from 'react-bootstrap';
// // import PropTypes from 'prop-types';
// // import { makeStyles } from '@material-ui/core/styles';
// // import ListItem from '@material-ui/core/ListItem';
// // import ListItemText from '@material-ui/core/ListItemText';
// // import { FixedSizeList } from 'react-window';

// // var k ;



