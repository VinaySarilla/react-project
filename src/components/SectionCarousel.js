import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';

import image1 from "../images/defaultBcg.jpg";
import image2 from "../images/defaultBcg.jpg";
import image3 from "../images/defaultBcg.jpg";



const useStyles = makeStyles({
  gridContainer: {
    paddingLeft:"50px",
    paddingRight: "50px",
    paddingTop: "20px",
    paddingBottom: "20px"
}
});

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.gridContainer} justify="center">
          <GridItem xs={12} sm={12} md={8} >
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
