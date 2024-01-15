import Image from 'next/image';
import React, { startTransition, useState } from 'react';
import google from '../../../assets/google.png'
import useAuth from '@/hooks/useAuth';
import createJWT from '@/utils/createJWT';
import { useRouter } from 'next/navigation';

const GoogleLogin = ({from}) => {

    
    const {googleLogin} = useAuth();
    

    const { replace, refresh } = useRouter();
    const handleGoogleLogin = async()=> {
        try {
            await googleLogin()
            .then(result => {
                const name = result.user.displayName;
                const email = result.user.email;
                createJWT({email});
                 const response = fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name, email})
                })

                if(response.ok){
                    alert('Done from google log in')
                }


            })
            
            
            
            
            startTransition(() => {
                refresh();
                replace(from);
                
              });
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