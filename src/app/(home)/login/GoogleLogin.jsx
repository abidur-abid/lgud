import Image from 'next/image';
import React from 'react';
import google from '../../../assets/google.png'

const GoogleLogin = () => {
    return (
        <div className="section">
            <div className="container flex justify-center">
                
                <button className='flex w-full justify-center gap-2 items-center btn secondaryColor border-2 border-secondaryColor uppercase px-10 py-3 rounded-full'> <Image src={google} className='w-8 h-8'></Image> Login With Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;