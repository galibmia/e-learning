import React from 'react';
import "./Home.css"
import Hero from '../Hero/Hero';
import bgImg from "../../assets/logo/hero-bg.png"

const Home = () => {
    return (
        <div>
            <div className='hero-bg-img mt-14'>
            <Hero></Hero>
            </div>
        </div>
    );
};

export default Home;