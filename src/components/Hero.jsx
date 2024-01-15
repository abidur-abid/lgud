import React from 'react';
import graduation from '../assets/graduation2.png'
import Image from 'next/image';
import Link from 'next/link';





const Hero = () => {
    return (
        <div className="section my-10">
            <div className="custom-container">
                <div className="custom-row">
                    <div className="custom-column">
                        <Image src={graduation}></Image>
                    </div>
                    <div className="custom-column">
                        <h1 className='text-4xl font-bold secondaryColor'>Local Government and Urban Development</h1>
                        <p className='my-8 secondaryColor'>Empowering Communities, Building Futures:  Transforming Urban Landscapes with Dedication and Innovation in <br /> Local Government and Urban Development.</p>
                        <Link className='button tablet-button' href={'/courses'}>Explore Courses </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;