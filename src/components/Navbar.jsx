'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { MdHome, } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { IoLogIn } from "react-icons/io5";
import useAuth from '@/hooks/useAuth';
import { MdDashboard } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { FaMinus } from "react-icons/fa";






const Navbar = () => {

    const {user} = useAuth();
    const [mobileMenu, setMobileMenu] = useState(true);
    const handleMobileMenu = () =>{
        setMobileMenu(!mobileMenu)
        console.log(mobileMenu)
    }

    return (
        <div className='sticky top-0'>
        <header className='mobile-menu-parent-position laptop-header-position z-10 sticky top-0'>
            <div className="custom-container sticky top-0">
                <div className="header-custom-row">
                    <div className="custom-column">
                    <h1 className='text-3xl font-extrabold text-primaryColor'>LGUD</h1>
                    </div>
                    <div className="custom-column">
                        <ul className='custom-laptop-menu'>
                            {/* if we want to use font awesome icon directly we have use fa-solid icon unless it will not work */}
                            <Link className='uppercase font-semibold flex items-center' href={'/'}> <MdHome /> Home</Link>
                            <Link className='uppercase font-semibold flex items-center' href={'/courses'}> <FaDiscourse /> Courses</Link>
                            <Link className='uppercase font-semibold flex items-center' href={'/teachers'}> <LiaChalkboardTeacherSolid /> Teachers</Link>
                            <Link className='uppercase font-semibold flex items-center' href={'/students'}> <PiStudentFill /> Students</Link>
                        {
                            user ? 
                            <Link className='uppercase font-semibold button  flex items-center' href={'/dashboard'}> <MdDashboard /> Dashboard</Link>
                            :
                            <Link className='uppercase font-semibold button  flex items-center' href={'/login'}> <IoLogIn /> Login</Link> 
                            
                        }
                        </ul>
                    </div>   
                    <div>
                                        
                        {
                            mobileMenu ? <button onClick={handleMobileMenu} className='flex justify-center items-center  custom-mobile-menu'> <IoMdMenu />
                            </button> : 
                            
                            <div className='mobile-menu-position w-60 h-80 pl-12 pr-20 rounded'>

                            <div onClick={handleMobileMenu} >
                                
                            <button >
                            <FaMinus />

                            </button>
                            <div className='grid grid-cols-1 justify-start gap-4 mt-4 mobile-menu '>
                            <Link className='uppercase font-semibold flex items-center' href={'/'}> <MdHome /> Home</Link>
                            <Link className='uppercase font-semibold flex items-center' href={'/courses'}> <FaDiscourse /> Courses</Link>
                            <Link className='uppercase font-semibold flex items-center' href={'/teachers'}> <LiaChalkboardTeacherSolid /> Teachers</Link>
                            <Link className='uppercase font-semibold flex items-center' href={'/students'}> <PiStudentFill /> Students</Link>
                        {
                            user ? 
                            <Link className='uppercase font-semibold button-sm mx-auto  flex items-center' href={'/dashboard'}> <MdDashboard /> Dashboard</Link>
                            :
                            <Link className='uppercase font-semibold button-sm  mx-auto  flex items-center' href={'/login'}> <IoLogIn /> Login</Link> 
                            
                        }
                            </div>
                            
                            </div>
                                
                            </div>
                            
                        }
                </div>               
                </div>
                
                
            </div>
            
        </header>
        </div>
    );
};

export default Navbar;



