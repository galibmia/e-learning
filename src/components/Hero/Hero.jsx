import React from 'react';
import HeroImage from "../../assets/image/hero.png";
import './Hero.css';

const Hero = () => {
    return (
        <div className='w-4/5 mx-auto flex items-center pt-20'>
            <div className='w-1/2'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Learn New Skills Online with Top <span className="text-color">Educators</span></h1>
                <p className="my-8 text-lg font-normal text-white lg:text-xl">Build skills with courses, certificates, and degrees online from
                    world-class universities and companies.
                </p>
                <button type="button" className="button-join outline-none font-medium rounded-lg px-8 py-4 text-center text-lg me-2 mb-2">Join For Free</button>
                <button type="button" className="button-course outline-none font-medium rounded-lg px-8 py-4 text-center text-lg me-2 mb-2">Find Courses</button>
            </div>
            <div className='w-1/2'>
                <img className='mx-auto' src={HeroImage} alt="Image" />
            </div>
        </div>
    );
};

export default Hero;