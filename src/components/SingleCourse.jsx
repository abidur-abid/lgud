import Image from 'next/image';
import React from 'react';

const SingleCourse = ({course}) => {

    console.log(course);
    return (
        <div className="section">
            <div className="container">
                <div className='border-2 border-primaryColor rounded py-4 px-2'>
                    <h4 className='text-xl font-bold text-center my-2'>Course Name: {course.course_name}</h4>
                    <p className='text-xl font-bold text-center text-primaryColor'>Credits: {course.credits}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;