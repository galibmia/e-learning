import React from 'react';
import "./Home.css"
import Hero from '../Hero/Hero';
import TrustedBrand from '../TrustedBrand/TrustedBrand';
import TopCategories from '../TopCategories/TopCategories';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <div className='hero-bg-img mt-14'>
                <Hero></Hero>
            </div>
            <div className='my-20'>
                <TrustedBrand></TrustedBrand>
            </div>
            <div className='my-20'>
                <TopCategories></TopCategories>
            </div>
            <div className='my-20'>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;