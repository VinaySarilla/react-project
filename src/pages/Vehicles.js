import React from 'react'
import img1 from '../images/truck_5.jpg';
import img2 from '../images/truck_8.jpg';
import img3 from '../images/truck_6.jpg';
import img4 from '../images/truck_7.jpg';
import img5 from '../images/truck_1.jpg';
import img6 from '../images/truck_2.jpg';
import img7 from '../images/truck_3.jpg';
import img8 from '../images/truck_4.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
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
export const Vehicles = () => {
    const classes = useStyles();
    return (
        <>
    <Hero hero="vehiclesHero">
        <Banner title="Our Vehicles" subtitle="Checkout Featured Vehicles">
            <Link to='/' className="btn-primary">
                Go to Home Page
            </Link>
            
        </Banner>
    </Hero>
    <section className="ser">
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
      <Link to='/vehicles:slug' className="btn-primary">Details</Link>
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
      <Link to='/vehicles:slug' className="btn-primary">Details</Link>
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
      <Link to='/vehicles:slug' className="btn-primary">Details</Link>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}> 
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="TATA 610 SFC TT BS6"
          height="140"
          image={ img8 }
          title="TATA 610 SFC TT BS6"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          TATA 610 SFC TT BS6
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          610 SFC TT caters key applications such as construction materials, tankers, LPG cylinders, poultry carriers. This truck is a 6.25T gross vehicle weight category with a 10 ft deck length
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/vehicles:slug' className="btn-primary">Details</Link>
        </CardActions>
    </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}> 
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Flatbed Trailer"
          height="140"
          image={ img1 }
          title="Flatbed Trailer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Flatbed Trailer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Flatbed trailer is a 1 Ton diesel mini trailer for transporting weight upto 5tons. It has a three-way drop load body which provides a mere 60 cm height for comfortable loading and unloading. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/vehicles:slug' className="btn-primary">Details</Link>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}> 
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Ashok Leyland 4220"
          height="140"
          image={ img4 }
          title="Ashok Leyland 4220"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Ashok Leyland 4220
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The cargo body options are 28, 30, and 32 ft with a wheelbase of 6600 mm; overall width is 2570 mm, and lengths are 10960, 11560, 11960 mm. Mostly used in construction sites.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/vehicles:slug' className="btn-primary">Details</Link>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}> 
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Mahindra blazo X 28 BS6"
          height="140"
          image={ img2 }
          title="Mahindra blazo X 28 BS6"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Mahindra blazo X 28 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Mahindra blazo X 28 Truck has capacity of upto 42 tons, for carrying loads ranging from coals to stones.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/vehicles:slug' className="btn-primary">Details</Link>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}> 
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          component="img"
          alt="XCIENT"
          height="140"
          image={ img3 }
          title="XCIENT"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          XCIENT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            XCIENT Eco-friendly and still energy-efficient solution for transportation, can tow an 18-ton trailer.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/vehicles:slug' className="btn-primary">Details</Link>
      </CardActions>
    </Card>
        </Grid>
        
     </Grid>
     </section>
    </>
    )
}

export default Vehicles;