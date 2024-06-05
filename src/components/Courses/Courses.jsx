import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='w-3/4 mx-auto mt-32 mb-10'>
            <h1 className='text-4xl font-semibold text-center'>Our Most Popular Courses</h1>
            <p className='mb-10 mt-5 text-center'>10,000+ unique online course list designs</p>
            <div className='grid grid-cols-4 gap-8'>
                {
                    courses.map(course => (
                        <Course key={course.id} course={course} />
                    ))
                }
            </div>
        </div>

    );
};

export default Courses;
