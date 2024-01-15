import Link from 'next/link';
import React from 'react';
import { GiFlamingSheet } from "react-icons/gi";
import { GiTargetPrize } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";




const DeptSummery = () => {
    return (
        <div className="section my-10">
            <div className="custom-container">
                <div className="custom-row gap-20">
                    <div className="custom-column">
                        <div className='flex items gap-5 text-4xl text-primaryColor tablet-social-link'>
                            <GiFlamingSheet />
                            <SiGoogleclassroom />
                            <GiTargetPrize />

                        </div>
                        <h4 className='text-xl secondaryColor my-8'>Lectures, Community & Contests</h4>
                        <p className='my-8 secondaryColor'>Over 500+ lectures for you to practice. Come and join one of the largest academic communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.</p>
                        <Link className='secondaryColor tablet-button mb-10' href={'/courses'}>Explore Courses</Link>
                    </div>
                    <div className="custom-column">
                        <div className='flex items gap-5 text-4xl text-primaryColor tablet-social-link'>
                            <FaBriefcase />
                            <FaPeopleGroup />


                        </div>
                        <h4 className='text-xl secondaryColor my-8'>Companies & Candidates</h4>
                        <p className='my-8 secondaryColor'>Not only does LGUD prepare candidates for academic interviews, we also help companies identify top academic talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.</p>
                        <Link className='secondaryColor tablet-button' href={'/courses'}>Job Opportunities</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DeptSummery;