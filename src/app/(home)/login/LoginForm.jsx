'use client'
import React, { startTransition } from 'react';
import Image from 'next/image';
import login2 from '../../../assets/login2.png';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import GoogleLogin from './GoogleLogin';
import useAuth from '@/hooks/useAuth';
import createJWT from '@/utils/createJWT';
import { useRouter, useSearchParams } from 'next/navigation';


const LoginForm = () => {

  const {login} = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = async(data) => {
    const {email, password} = data;

    try {
      await login(email, password);
      await createJWT({email});
      
      startTransition(() => {
        refresh();
        replace(from);
        
      });
    } 
    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="section my-20">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="column">
            {/* Use the Image component correctly */}
            <Image src={login2} alt="Login Image" />
          </div>
          <div className="column">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

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
            <GoogleLogin/>
            <p className='text-center  mt-8 secondaryColor'><Link href={'/register'}> If You Don't Have Any Account, <br /> Please Register.</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
