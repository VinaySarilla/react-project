import React, { Component } from 'react'
import img5 from '../images/truck_1.jpg';
import img6 from '../images/truck_2.jpg';
import img7 from '../images/truck_3.jpg';
import Title from './Title';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft:"50px",
        paddingRight: "50px",
        paddingTop: "20px",
        paddingBottom: "20px"
    }
})

export const FeaturedVehicles = () => {
    const classes = useStyles();
    return (
         <>
        <section className="ser">       
        <Title title="Featured Vehicles" />  
        <Grid container spacing={4} className={classes.gridContainer} justify="center">
        <Grid item xs={12} sm={6} md={4}> 
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Tata 407"
          height="140"
          image={ img5 }
          title="TATA 407"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          TATA 407
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The 407 has a payload of 2.25 tonnes, an overall length of 4.7 metres, and a turning circle radius of 5.5 metres. Also Available for Intracities. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/vehicles:slug' className="btn-primary" justify="center">Details</Link>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}> 
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Ashok Leyland U 4923 TT"
          height="140"
          image={ img6 }
          title="Ashok Leyland U 4923 TT"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Ashok Leyland U 4923 TT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Ashok Leyland U 4923 TT can be used as a bulker, tip-trailer, skeleton and flatbed trailer for carrying loads ranging from coals to stones, vehicles and more.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/vehicles:slug' className="btn-primary" justify="center">Deatils</Link>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}> 
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="TATA Ace"
          height="140"
          image={ img7 }
          title="TATA Ace"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            TATA Ace
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Tata Super Ace is a 1 Ton diesel mini truck for Intra City Applications and Last Mile Distribution. The Super Ace has a turning radius of 5.1 m.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/vehicles:slug' className="btn-primary" justify="center">details</Link>
      </CardActions>
    </Card>
        </Grid>
    </Grid>
    </section>
    </>
    )
}

export default FeaturedVehicles;