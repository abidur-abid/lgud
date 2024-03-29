import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bdFlag from '../assets/bdFlag.png'

const Footer = () => {
    return (
        <div className="section my-10">
            <div className="custom-container">
                <div className='text-center secondaryColor'>
                    
                     <p>If you are passionate about tackling some of the most interesting problems <br /> around, we would love to hear from you.</p>
                     
                    
                    <p className='mt-2 mb-8'><Link className='font-semibold' href={'/login'}>Join Our Team</Link></p>
                    
                </div>
                <div className='custom-row border-t-2 border-secondaryColor pt-5'>
                    <div className='custom-column'>
                        <p className='secondaryColor'>Copyright © 2024 LGUD</p>
                    </div>
                    <div className='flex items-center gap-5 custom-column tablet-social-link'>
                        <Link className='secondaryColor' href={'/'}>Home</Link> |
                        <Link className='secondaryColor' href={'/courses'}>Courses</Link> |
                        <Link className='secondaryColor' href={'/teachers'}>Teachers</Link> |
                        <Link className='secondaryColor' href={'/students'}>Students</Link> |
                        <Image className='w-12 h-12' src={bdFlag} alt="Footer Image"></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;