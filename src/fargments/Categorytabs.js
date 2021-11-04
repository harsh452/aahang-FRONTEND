// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Avatar, Container } from '@material-ui/core';


// export class Categorytabs extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 0
//         }
//     }
    // handleChange = (event, newValue) => {
    //     this.setState({
    //         value: newValue
    //     })
    // };

//     render() {
//         return (
//             <Container>
//                 <AppBar position="static" color="white">
//                     <Tabs
//                         value={this.state.value}
//                         onChange={this.handleChange}
//                         indicatorColor="primary"
//                         textColor="primary"
//                         variant="scrollable"
//                         scrollButtons="auto"
//                         aria-label="scrollable auto tabs example"
//                     >
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />
//                         <Tab icon={<Categorytab />} />


//                     </Tabs>
//                 </AppBar>
//             </Container>



//         );
//     }
// }

// export const Categorytab = (icon, categoryName) => {
//     return (
//         <Box>
//             {
//                 icon ? (
//                     <Avatar
//                         alt="Remy Sharp"
//                         src={icon}
//                         variant="rounded" />
//                 ) : (
//                         <Home />
//                     )}

            

//             <Typography variant="OVERLINE TEXT" color="white" >{categoryName}</Typography>
//         </Box>
//     )
// }

// export default Categorytabs


