import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiGraduationCapFill } from "react-icons/ri";
import courses from '../assets/courses2.png'


const Exploring = () => {
    return (
        <div className="section my-10">
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column">
                        
                            <div className="flex justify-end  tablet-social-link text-primaryColor gap-3">
                            <p className="text-xl text-primaryColor text-right">Start Exploring </p>
                            <p className="text-4xl text-right"><RiGraduationCapFill /></p>
                            </div>
                        
                        <p className="my-8 lg:text-right secondaryColor">
                            Start Exploring <br />
                            Explore is a well-organized tool that helps you get the most out of LGUD by providing structure to guide your <br />progress towards the next step in your academic career.</p>
                            <p className="text-right text-primaryColor tablet-button"><Link  href={"/courses"}>Explore Courses</Link></p>
                    </div>
                    <div className="custom-column">
                        <Image src={courses} alt="Exploring Image"></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exploring;