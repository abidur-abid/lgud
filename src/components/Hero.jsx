import React from 'react';
import graduation from '../assets/graduation.png'
import Image from 'next/image';
import Link from 'next/link';



const Hero = () => {
    return (
        <div className="section my-10">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <Image src={graduation}></Image>
                    </div>
                    <div className="column">
                        <h1 className='text-4xl font-bold secondaryColor'>Local Government and Urban Development</h1>
                        <p className='my-8 secondaryColor'>Empowering Communities, Building Futures: <br></br> Transforming Urban Landscapes with Dedication and Innovation in <br /> Local Government and Urban Development.</p>
                        <Link className='button' href={'/courses'}>Explore Courses </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;