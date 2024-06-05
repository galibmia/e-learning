import React from 'react';
import HeroImage from "../../assets/image/hero.png";
import './Hero.css';
import { AcademicCapIcon, ComputerDesktopIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

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
                <div className='my-5 flex gap-5'>
                    <p className='flex gap-2 text-white'><AcademicCapIcon className="size-6 text-white" /><span>Over 12 million students</span></p>
                    <p className='flex gap-2 text-white'><PlayCircleIcon className="size-6 text-white" /><span>More than 60,000 courses</span></p>
                    <p className='flex gap-2 text-white'><ComputerDesktopIcon className="size-6 text-white" /><span>Learn anything online</span></p>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='mx-auto hero-img' src={HeroImage} alt="Image" />
            </div>
            
        </div>
    );
};

export default Hero;