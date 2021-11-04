import React, { Component } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServiceProvider from '../components/ServiceProvider';
import { firestore } from "../firebase";
import showProviders from '../action/loadServiceAction';
import { Backdrop, CircularProgress } from '@material-ui/core';
import '../css/home.css'



export class Gridview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,

        }

    }


    renderCard = (card, index) => {

        return (
            <Router>

                <Col style={{ width: "80%" }} sm>


                    <Link to={"/home/service/" + card.title} style={{textDecoration:"none", color:"black"}} onClick={e => {

                        this.setState({ loading: true })
                        this.props.showProviders(
                            card.title
                            , () => {

                                this.setState({ loading: false })



                            }, () => {
                                this.setState({ loading: false })

                            })


                    }}>
                        <Card className="image" key={index} style={{ width: "70%",height:'250px' }}>
                            <Card.Img variant="top" src={card.element} style={{height: "200px", width: "90%"}} />
                        
                              <h5 className='head'> {card.title}</h5><br/>
                              <p>{card.desc}</p>
                            
                        </Card>
                    </Link>

                </Col>
                <Switch>
                    <Route path={"/home/service/:title"}>
                        <ServiceProvider catData={this.props.provider} />
                    </Route>
                </Switch>


            </Router>


        );
    }

    render() {
        {console.log(this.props.Gridimages)  }
        return (
            <>
                <Container  style={{ textAlign: "center", width: "100%", marginBottom: "50px" }}>
                    <Row style={{justifyContent:"center"}}>

                        {this.props.Gridimages.map(this.renderCard)}

                    </Row>


                </Container>
                {/* <Backdrop style={{ zIndex: "1500" }} open={this.state.loading} >
                    <CircularProgress color="inherit" />
                </Backdrop> */}

            </>


        )
    }
}






const mapStateToProps = (state) => {
    return {
        provider: state.provider
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        showProviders: (data, onSuccess, onError) => dispatch(showProviders(data, onSuccess, onError)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Gridview)

