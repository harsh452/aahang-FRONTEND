import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import showBanners from '../action/loadBannerAction'
import { connect } from "react-redux"
import BannerSlider from '../fargments/BannerSlider';
import { AppBar, Avatar, Backdrop, Box, CircularProgress, Container, Tabs, Toolbar, Typography, Tab } from '@material-ui/core';
import Categorytabs from '../fargments/Categorytabs'
import showCategory from '../action/loadCategoryAction';
import { Home } from '@material-ui/icons';
import BannerSlider2 from '../fargments/BannerSlider2';
import ServiceProvider from './ServiceProvider';
import { Row, Col, Card } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Gridview from '../fargments/Gridview';
import Stripadd from '../fargments/Stripadd';
import '../css/Tab.css'




export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      value: 0,
      page: "HOME",

    }


  }
  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    })
  };




  componentDidMount() {
    if (this.props.category === null) {
      this.props.showCategory(() => {
        this.props.showBanners(
          'HOME'
          , () => {

            this.setState({ loading: false })

          }, () => {
            this.setState({ loading: false })

          })

      }, () => {
        this.setState({ loading: false })

      })
    }


  }





  render() {
    return (

      <div>

        <Container>
          <Tabs
          className='tab-cont'
            // style={{marginLeft:'30px'}}
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="dark"
            textColor="dark"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"

          >
            {this.props.category ? this.props.category.map((cat) => (
              console.log("hello"),
              <Tab
              style={{float:'left'}}
                icon={
                  <Categorytab
                    icon={cat.icon}
                    title={cat.categoryName}
                  />
                }
                onClick={e => {
                  if (this.props.banners[cat.categoryName.toUpperCase()]) {
                    this.setState({
                      page: cat.categoryName.toUpperCase()
                    })
                  } else {
                    this.setState({ loading: true })
                    this.props.showBanners(
                      cat.categoryName.toUpperCase()
                      , () => {

                        this.setState({ loading: false, page: cat.categoryName.toUpperCase() })

                      }, () => {
                        this.setState({ loading: false })

                      })
                  }

                }}
              />

            )) : null}
          </Tabs>
        </Container>
        <Toolbar />
      
        
        {this.props.banners ? this.props.banners[this.state.page].map((item, index) => {

            switch (item.website_view) {
              case 0:
                let banner = [];
                for (let index = 1; index < item.number_of_banner + 1; index++) {
                  const element = item["banner_" + index];
                  banner.push(element)
                }

                return (<><BannerSlider Images={banner} />
                </>)

              case 4:
                let grid = [];
                for (let index = 1; index < 4; index++) {
                  const element = item["service_image_" + index];
                  const title = item['service_title_' + index]
                  const desc = item['service_description_' + index]
                  grid.push({ element, title,desc })
                }
                //  console.log(grid);
                return (<><Gridview Gridimages={grid} />
                  </>)
                  

              case 3:
                let banner2 = [];
                for (let index = 1; index < item.number_of_banner + 1; index++) {
                  const element = item["banner_" + index];
                  banner2.push(element)
                }

                return (<><BannerSlider2 Images={banner2} />
                  <Toolbar /></>)

              case 2:
                let add = [];
                  const addelement = item["strip_ad_banner"];
                  add.push(addelement)
                return (<><Stripadd adds={add} />
                  <Toolbar /></>)


              default:
                break;
            }



          })
            : null}
        

        <Toolbar />
{/* 
        <Backdrop open={this.state.loading} >
          <CircularProgress color="inherit" />
        </Backdrop> */}


      </div>
    )
  }
}






export const Categorytab = ({ icon, title }) => {
  return (
    <Box textAlign="center">
      {
        icon !== "null" ? (
          <img
            style={{ height: "30px", width: "30px" }}
            alt="Remy Sharp"
            src={icon}
            variant="rounded" />
        ) : (
            <Home />
          )}



      <p variant="OVERLINE TEXT" color="white" >{title}</p>
    </Box>
  )
}







const mapStateToProps = (state) => {
  return {
    banners: state.banners,
    category: state.category,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showBanners: (pagedata, onSuccess, onError) => dispatch(showBanners(pagedata, onSuccess, onError)),
    showCategory: (onSuccess, onError) => dispatch(showCategory(onSuccess, onError)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
