import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='w-4/5 mx-auto mt-32 grid grid-cols-4 gap-8 mb-10'>
            {
                courses.map(course => (
                    <Course key={course.id} course={course} />
                ))
            }
        </div>
    );
};

export default Courses;
