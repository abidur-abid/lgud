'use client'
import React from 'react';
import Image from 'next/image';
import login from '../../../assets/login2.png';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import GoogleLogin from './GoogleLogin';


const LoginForm = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="column">
            {/* Use the Image component correctly */}
            <Image src={login} alt="Login Image" />
          </div>
          <div className="column">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

              <input className='border-2 focus:outline-none bg-transparent border-primaryColor secondaryColor rounded-full text-center text-xl px-10 py-2' type='email' placeholder='Enter Your Email' name='email'
              {...register("email", {
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
              })}
            />
            <br />
            {errors.email && (
              <span className="text-red-500 text-base mt-1 mx-auto">
                Please enter a valid email address.
              </span>
            )} <br />

              <input className='border-2 focus:outline-none bg-transparent border-primaryColor secondaryColor rounded-full text-center text-xl px-10 py-2 my-1' type='password' placeholder='Enter Your PassWord' name='password'
              {...register("password", { required: true, minLength: 6 })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-base mt-1">
                  Please enter a password.
                </span>
              )} <br />
              <input className=' button w-full  rounded-full text-center text-xl px-10 py-2 border-primaryColor' type='submit'/>
            </form>
            <GoogleLogin/>
            <p className='text-center  mt-8 secondaryColor'><Link href={''}> If You Don't Have Any Account, <br /> Please Register.</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
