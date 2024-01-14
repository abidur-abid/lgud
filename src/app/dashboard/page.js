"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';
import damiProfile from '../../assets/damiprofile.png'
import Image from 'next/image';
import { RiLogoutBoxFill } from "react-icons/ri";


const Dashboard = () => {

    const {user, logOut} = useAuth();

    const handleLogOut = async()=>{
        try {
            await logOut();
            const res = await fetch('/api/auth/logOut', {
                method: 'POST'
            })

            await res.json();
        } 
        catch (error) {
          console.log(error.message)  
        }
    }
   
    console.log(user);
    
    return (
       
        <div className='section my-10'>
            <div className='container'>
                <div>
                    {
                        user && <Image className=' mx-auto rounded-full' width={'150'} height={'150'} src={user.photoURL ? user.photoURL : damiProfile} alt="User Profile Image" ></Image>
                    }
                    <h2 className='text-center uppercase my-4 text-2xl font-bold'>{user && user.displayName}</h2>
                    <p className='text-center'><button className='button uppercase font-semibold' onClick={handleLogOut}>  Log Out</button></p>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;