import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import rakibsir from '../../../assets/rakibsir.png'
import tonnimam from '../../../assets/tonnimam.png'
import lipimam from '../../../assets/lipimam.png'
import Image from 'next/image';
import Gif from '@/components/Gif';




const Teachers = () => {
    return (
        <div className='section '>
            <div className='custom-container'>
                <div className='my-10'>
                    <Gif/>
                </div>
                <div className="singleTeacher custom-row flex justify-center items-center gap-28">
                    <div className='custom-column'>
                        <h4 className='text-xl font-semibold'>Rakibul Islam</h4>
                        <p className='my-4'>Head of the department and <br></br> Assistant Professor</p>
                        <div className='text-primaryColor text-xl flex gap-5 tablet-social-link mb-8'>
                            <FaFacebook />
                            <BsLinkedin />
                            <FaTwitter />

                        </div>
                    </div>
                    
                    <div className='custom-column'>
                        <Image src={rakibsir} className='mx-auto'></Image>
                    </div>
                </div>
                <div className='my-20'>
                 <Gif/>
                </div>
                <div className='singleTeacher custom-row flex justify-center items-center gap-28 '>
                
                    <div className='custom-column'>
                        <h4 className='text-xl font-semibold'>Sadia Afroz Tonni</h4>
                        <p className='my-4'> Assistant Professor</p>
                        <div className='text-primaryColor text-xl flex gap-5 tablet-social-link mb-8'>
                            <FaFacebook />
                            <BsLinkedin />
                            <FaTwitter />

                        </div>
                    </div>

                    <div className='custom-column'>
                        <Image src={tonnimam} className='mx-auto'></Image>
                    </div>
                    
                </div>
                <div className='my-10'>
                    <Gif/>
                </div>
                <div className='singleTeacher custom-row flex justify-center items-center gap-28'>
                    <div className='custom-column'>
                        <h4 className='text-xl font-semibold'>Afroza Islam Lipi</h4>
                        <p className='my-4'> Assistant Professor</p>
                        <div className='text-primaryColor  text-xl flex gap-5 tablet-social-link mb-8'>
                            <FaFacebook />
                            <BsLinkedin />
                            <FaTwitter />

                        </div>
                    </div>
                    <div className='custom-column'>
                        <Image src={lipimam} className='mx-auto'></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;