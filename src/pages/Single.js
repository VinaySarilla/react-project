import React, { Component } from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Title from '../components/Title';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../images/details-1.jpg'
import image2 from '../images/details-2.jpg'
import image3 from '../images/details-3.jpg'
import image4 from '../images/details-4.jpg'

export default class single extends Component {
    render() {
        return (
        <>
            <Hero>   
                <Banner title="Check out Vehicles" subtitle="Ship any thing you want at lowest possible cost">
                <Link to='/vehicles' className="btn-primary">
                our vehicles
                </Link>
                </Banner>
            </Hero>
            <section className="ser">
            <Title title="Details" /> 
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" />
                <img src={image2} className="sliderimg" />
                <img src={image3} className="sliderimg" />
                <img src={image4} className="sliderimg" />
            </AliceCarousel>
            <h3>INFO</h3>
            <p>The 407 has a payload of 2.25 tonnes, an overall length of 4.7 metres, and a turning circle radius of 5.5 metres. Also Available for Intracities.</p>
            <p>Ashok Leyland U 4923 TT can be used as a bulker, tip-trailer, skeleton and flatbed trailer for carrying loads ranging from coals to stones.</p>
            </section>
        </>
        )
    }
}

