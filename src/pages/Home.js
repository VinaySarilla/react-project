import React from 'react'
import Banner from '../components/Banner';
import Hero from "../components/Hero";
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedVehicles from '../components/FeaturedVehicles';
import Contact from '../components/Contact';

export const Home = () => {
    return (
        <>
       
    <Hero hero="defaultHero">
        <Banner title="Trucks" subtitle="Ship any thing you want at lowest possible cost">
            <Link to='/vehicles' className="btn-primary">
                our vehicles
            </Link>
        </Banner>

    </Hero> 

    <Services />
    <FeaturedVehicles />
    <Contact />
    
    </>
    )
}
export default Home;
