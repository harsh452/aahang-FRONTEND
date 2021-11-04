import React, { Component, useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { firestore, firebaseAuth } from "../firebase";



export class Orderlist extends Component {

    constructor(props) {

        super(props)
        this.state = {
            orderData: []
        }

    }
    componentDidMount() {
        firestore.collection('USERS').doc(firebaseAuth.getUid()).collection('USER_ORDERS').get().then((querrySnapshot) => {
            let orData = []
            querrySnapshot.forEach((doc) => {
                orData.push(doc.data())
            })
            this.setState({
                orderData: orData
            })
        })
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h3>Order History</h3>
                {this.state.orderData ? this.state.orderData.map((orderCred)=>{
                
                   return <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={orderCred['photo']} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={orderCred['pro_name']}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Order Id - {orderCred['order_id']}<br/>
                                        Payement Mode - {orderCred['pay_mode']}<br/>

              </Typography>
                                    {" — Service provider will reach your destination soon..."}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                </List> 
                }): null}

            </div>
        )
    }
}

export default Orderlist
