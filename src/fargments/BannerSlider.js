import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { blueGrey } from "@material-ui/core/colors";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const BannerSlider = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();

  
    const handleStepChange = (step) => {
        setActiveStep(step);
      };
    
      return (
        <div>
         
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {props.Images.map((step, index) => (
              <div key={index} style = {{width:"100%",textAlign:'center',}}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img style={{width:"50%",height:"270px",borderRadius:'45px'}} src={step} alt="" />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
         
        </div>
      );
}

export default BannerSlider

