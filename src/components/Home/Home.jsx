import React from 'react';
import "./Home.css"
import Hero from '../Hero/Hero';
import TrustedBrand from '../TrustedBrand/TrustedBrand';
import TopCategories from '../TopCategories/TopCategories';
import { useLoaderData } from 'react-router-dom';
import TopCourse from '../TopCourse/TopCourse';

const Home = () => {
    // To Display top courses
    const courses = useLoaderData();
    const displayCourses = courses.slice(0, 8);

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
                <TopCourse displayCourses={displayCourses}></TopCourse>
            </div>
        </div>
    );
};

export default Home;