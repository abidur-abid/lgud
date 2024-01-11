import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h1 className='text-3xl font-extrabold text-primaryColor'>LGUD</h1>
                    </div>
                    <div className="column flex justify-between gap-10 items-center">
                        <Link className='uppercase font-semibold' href={'/'}>Home</Link>
                        <Link className='uppercase font-semibold' href={'/courses'}>Courses</Link>
                        <Link className='uppercase font-semibold' href={'/teachers'}>Teachers</Link>
                        <Link className='uppercase font-semibold' href={'/students'}>Students</Link>
                        <Link className='uppercase font-semibold button' href={'/login'}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;