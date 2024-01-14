'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import registration from '../../../assets/register.png'
import Gif from '@/components/Gif';
import useAuth from '@/hooks/useAuth';
import createJWT from '@/utils/createJWT';

const Register = () => {

  
    const {createUser, profileUpdate} = useAuth();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        
        let formData = new FormData();
        formData.append("image", data.file[0]);
        
        const {name, email, password,} = data;
    
        try {
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_imageApi}`, {
                method: "POST",
                body: formData,
            });
            if (!res.ok) throw new Error("Failed to image upload");
            const responseData = await res.json();
            await createUser(email, password);
            await createJWT({email});
            await profileUpdate({
                displayName: name,
                photoUrl: responseData.data.url
            })
           
        } catch (error) {
            console.log(error.message);
        }
    };
    

  

    return (
       <>
       <Gif/>
       <div className="section py-20">
            <div className="container ">
                <div className="flex justify-center items-center">
                    <div className="column">
                        <Image src={registration}></Image>
                    </div>
                    <div className="column">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <input className='border-2 w-full focus:outline-none bg-transparent border-primaryColor secondaryColor rounded-full text-center text-xl px-10 py-2' type='text' placeholder='Enter Your Full Name' name='name'
                    {...register("name", {
                    required: true,
                    
                    })}
                    />
                   
                    {errors.name && (
                    <span className="text-red-500 text-base mt-1 mx-auto">
                    Please enter your full name.
                    </span>
                    )} 

                    <input className='border-2 w-full focus:outline-none bg-transparent border-primaryColor secondaryColor rounded-full text-center text-xl px-10 py-2' type='text' placeholder='Chairman / Teacher / Student' name='profession'
                    {...register("profession", {
                    required: true,
                    
                    })}
                    />
                    
                    {errors.profession && (
                    <span className="text-red-500 text-base mt-1 mx-auto">
                    Please enter your profession.
                    </span>
                    )} 

                    <input className='border-2 w-full focus:outline-none bg-transparent border-primaryColor secondaryColor rounded-full text-center text-xl px-10 py-2' type='text' placeholder='Session / Job Starting Year' name='duration'
                    {...register("duration", {
                    required: true,
                    
                    })}
                    />
                    
                    {errors.duration && (
                    <span className="text-red-500 text-base mt-1 mx-auto">
                    Please enter your time duration.
                    </span>
                    )} 

                    <input type="file"  className=' border-2 w-full focus:outline-none bg-transparent border-primaryColor secondaryColor rounded-full text-center text-xl px-10 py-2' placeholder='Put Your Profile Picture' name='file'
                    {...register("file")}
                    />
                 
                    {errors.file && (
                        <span className="text-red-500 text-base mt-1 mx-auto">
                            Please enter your profile picture.
                        </span>
                    )}
 

                    <input className='border-2 w-full focus:outline-none bg-transparent border-primaryColor secondaryColor rounded-full text-center text-xl px-10 py-2' type='email' placeholder='Enter Your Email' name='email'
                    {...register("email", {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                    })}
                    />
                    
                    {errors.email && (
                    <span className="text-red-500 text-base mt-1 mx-auto">
                    Please enter a valid email address.
                    </span>
                    )} 

                    <input className='border-2 w-full focus:outline-none bg-transparent border-primaryColor secondaryColor rounded-full text-center text-xl px-10 py-2 my-1' type='password' placeholder='Enter Your PassWord' name='password'
                    {...register("password", { required: true, minLength: 6 })}
                    />
                   
                    {errors.password && (
                    <span className="text-red-500 text-base mt-1 mx-auto">
                        Please enter a password.
                    </span>
                    )} 
                    <input className=' button w-full  rounded-full text-center text-xl px-10 py-2 border-primaryColor' type='submit'/>
                    </form>

                    <p className='text-center  mt-8 secondaryColor'><Link href={'/login'}> If You Already Have An Account, <br /> Please Login.</Link></p>
                    </div>
                </div>
            </div>
        </div>
       <Gif/> 
       </>
    );
};

export default Register;