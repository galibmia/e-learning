import React from 'react';
import "./Home.css"
import Hero from '../Hero/Hero';
import TrustedBrand from '../TrustedBrand/TrustedBrand';

const Home = () => {
    return (
        <div>
            <div className='hero-bg-img mt-14'>
            <Hero></Hero>
            </div>
            <div className='my-14'>
            <TrustedBrand></TrustedBrand>
            </div>
        </div>
    );
};

export default Home;