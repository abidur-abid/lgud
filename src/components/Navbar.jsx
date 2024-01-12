import Link from 'next/link';
import React from 'react';
import { MdHome, } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { IoLogIn } from "react-icons/io5";




const Navbar = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h1 className='text-3xl font-extrabold text-primaryColor'>LGUD</h1>
                    </div>
                    <div className="column flex justify-between gap-10 items-center secondaryColor">
                        <Link className='uppercase font-semibold flex items-center' href={'/'}> <MdHome /> Home</Link>
                        <Link className='uppercase font-semibold flex items-center' href={'/courses'}> <FaDiscourse /> Courses</Link>
                        <Link className='uppercase font-semibold flex items-center' href={'/teachers'}> <LiaChalkboardTeacherSolid /> Teachers</Link>
                        <Link className='uppercase font-semibold flex items-center' href={'/students'}> <PiStudentFill /> Students</Link>
                        <Link className='uppercase font-semibold button flex items-center' href={'/login'}> <IoLogIn /> Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;