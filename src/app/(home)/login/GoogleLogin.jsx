import Image from 'next/image';
import React from 'react';
import google from '../../../assets/google.png'
import useAuth from '@/hooks/useAuth';
import createJWT from '@/utils/createJWT';

const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    const handleGoogleLogin = async()=> {
        try {
            await googleLogin();
            await createJWT({email})
        } 
        catch (error) {
           console.log(error.message) 
        }
    }
    return (
        <div className="section">
            <div className="container flex justify-center">
                
                <button onClick={handleGoogleLogin} className='flex w-full justify-center gap-2 items-center secondaryColor border-2 border-secondaryColor uppercase px-10 py-3 rounded-full'> <Image src={google} className='w-8 h-8'></Image> Login With Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;