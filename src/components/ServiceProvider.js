import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import StarIcon from '@material-ui/icons/Star';
import '../css/serviceProvider.css'
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ServicecProviderDetails from './ServiceProviderDetails'
import { Col, Dropdown, Row } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import filter from '../images/filtering.png'

const marks = [
  {
    value: 100,
    label: 'RS 100',
  },
  {
    value: 1000,
    label: 'Rs 1000',
  }
];
export class ServiceProvider extends Component {
  constructor(props) {

    super(props)
    this.state = {
      price: [0],
      value: null,
      barValue: 1000
    }

  }

  componentDidMount() {

    setTimeout(() => {
      <>
        {console.log('did mount')}
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          this.setState({
            price: catName.service_charge,
          })

        }) : null} </>
    }, 1000);
  }


  handleValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handlebarValue = (e, newValue) => {
    this.setState({
      barValue: newValue
    })
  }



  handleChange = (event) => {


    if (this.state.value == null) {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName.service_charge <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName.service_charge, catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center" >
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName.service_charge}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Facial') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Facial Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Facial Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Facial Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Hair Coloring') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Hair Coloring Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Hair Coloring Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Hair Coloring Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Bleach') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Bleach Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Bleach Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Bleach Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Waxing') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Waxing Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Waxing Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Waxing Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Pedicure') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Pedicure Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Pedicure Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Pedicure Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Hair Treatment') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Hair Treatment Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Hair Treatment Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Hair Treatment Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Massage') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Massage Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Massage Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Massage Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Shaving') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Shaving Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Shaving Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Shaving Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>

    }
    if (this.state.value == 'Hair Cut') {

      return <div class="row">
        {this.props.catData ? this.props.catData[this.props.catData.impData].map((catName) => {
          if (catName.hired == false && catName['Hair Cut Charge'] <= this.state.barValue) {
            let details = [];
            let cutted = JSON.parse(catName.service_charge) + 50

            details.push(catName.service_provider_name, catName['average_rating'], catName.service_provider_image_1, catName.service_provider_image_2, catName.service_provider_image_3, catName['Hair Cut Charge'], catName.star_1, catName.star_2, catName.star_3, catName.star_4, catName.star_5, catName.service_provider_details, this.props.catData.impData, catName.serviceID)
            return (<div className="col-lg-5 col-md-6">
              <Router>
                <Link to={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ borderRadius: '45px', height: '270px', width: '300px' }} className="card card_red text-center">
                    <img style={{ height: "100px", width: "100px", borderRadius: "30px" }} src={catName.Profile_photo}></img>
                    <h2 >{catName.service_provider_name}</h2>
                    <h4 ><sup style={{ color: "black", textDecoration: "none" }}>Rs</sup><del>{cutted}</del> {catName['Hair Cut Charge']}</h4>
                    <p><StarIcon style={{ color: "green", display: "inline-block" }} />{catName.average_rating} (Total ratings-{catName.total_ratings})</p>
                  </div>
                </Link>
                <Switch>
                  <Route path={"/home/service" + "/" + this.props.catData.impData + "/" + catName.service_provider_name}>
                    <ServicecProviderDetails personDetails={details} />
                  </Route>
                </Switch>
              </Router>
              <Toolbar />
            </div>

            )
          }

        }) : null}

      </div>
    }





  };


  filter() {
    if (this.props.catData.impData == 'WOMEN GROOMING') {
      console.log("my name is harsh");
      return (


        <FormControl component="fieldset">
          <h4>Categories</h4>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel onChange={this.handleValue} value="Hair Coloring" control={<Radio size='small' />} label="Hair Coloring" />
            <FormControlLabel onChange={this.handleValue} value="Facial" control={<Radio size='small' />} label="Facial" />
            <FormControlLabel onChange={this.handleValue} value="Pedicure" control={<Radio size='small' />} label="Pedicure" />
            <FormControlLabel onChange={this.handleValue} value="Hair Cut" control={<Radio size='small' />} label="Hair Cut" />
            <FormControlLabel onChange={this.handleValue} value="Hair Treatment" control={<Radio size='small' />} label="Hair Treatment" />
            <FormControlLabel onChange={this.handleValue} value="Bleach" control={<Radio size='small' />} label="Bleach" />
            <FormControlLabel onChange={this.handleValue} value="Waxing" control={<Radio size='small' />} label="Waxing" />

          </RadioGroup>
        </FormControl>

      )
    } else if (this.props.catData.impData == 'MEN GROOMING') {
      return (

        <FormControl component="fieldset">
          <h4>Categories</h4>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel onChange={this.handleValue} value="Hair Coloring" control={<Radio size='small' />} label="Hair Coloring" />
            <FormControlLabel onChange={this.handleValue} value="Facial" control={<Radio size='small' />} label="Facial" />
            <FormControlLabel onChange={this.handleValue} value="Shaving" control={<Radio size='small' />} label="Shaving" />
            <FormControlLabel onChange={this.handleValue} value="Hair Cut" control={<Radio size='small' />} label="Hair Cut" />
            <FormControlLabel onChange={this.handleValue} value="Massage" control={<Radio size='small' />} label="Massage" />
          </RadioGroup>
        </FormControl>
      )
    } else {
      console.log("no such data");
    }
  }

  render() {

    return (
      <div>
        <Dialog fullScreen open={true} >

          {console.log(this.state.barValue)
          }
          <Row>
            <Col md={3} style={{ textAlign: 'center', padding: '25px' }}>
            <div style={{ marginTop: '20px'}}>

              <h5><img style={{ height: '30px', width: '30px' }} src={filter}></img> filter</h5><br></br>
              {this.props.catData ? this.filter()
                : null}<br />
                <h4>Price Range</h4>
          
                <Slider
                  style={{ color: 'lightgreen', maxWidth: '250px',minWidth:'100px' ,display:'inline-block'}}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={1000}
                  min={100}
                  max={1000}
                  onChange={this.handlebarValue}
                />
              </div>


            </Col>
            <Col lg={9}>
              <header class="section-header">

                <section class="header-main border-bottom">
                  <div class="container">
                    <div class="row align-items-center">
                      <section class="section-pagetop bg">
                        <div class="container">

                          {this.props.catData ? this.props.catData[this.props.catData.impData].slice(0, 1).map((catName) => {
                            return <h3 className='title'>{this.props.catData.impData}</h3>

                          }) : null}

                        </div>
                      </section>

                    </div>
                  </div>
                </section>
              </header>
              <div className="App">

                <section style={{ textAlign: 'center', marginTop: '30px' }}>
                  <Row>
                    <Col >
                      {this.handleChange()}
                    </Col>
                  </Row>


                </section>
              </div></Col>
          </Row>

          <footer style={{ position: "fixed", bottom: 0, textAlign: "center", left: 0, backgroundColor: "lightgreen", height: "50px", width: "100%" }}>

            <p>
              &copy; Copyright 2021 All rights reserved <br></br>
              
            </p>
          </footer>
        </Dialog>
      </div>


    );
  }
}

export default ServiceProvider



