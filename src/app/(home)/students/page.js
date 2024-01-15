import getUsers from '@/utils/getUsers';
import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";

const Students = async() => {
    const allStudents = await getUsers();
    // console.log(data);

    return (
        <div className='section my-10'>
            <div className='custom-container'>
                
                        
                        <div className="overflow-x-auto">
                        <table className="table text-xl font-semibold secondaryColor">
                           
                            <thead>
                            <tr>
                                <th className='text-2xl font-bold uppercase '>Name</th>
                                <th className='text-2xl font-bold uppercase'>Email</th>
                                <th className='text-2xl font-bold uppercase'>Social Link</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            {
                                allStudents.map(student => 
                                    <tr key={student._id}>
                                        <th className='uppercase'>{student.name}</th>
                                        <td>{student.email}</td>
                                        <td className='flex gap-5 text-primaryColor'>
                                            <FaFacebook />
                                            <BsLinkedin />
                                            <FaTwitter />
                                        </td>
                                
                                    </tr>
                                    
                                )
                            }
                            
                            </tbody>
                        </table>
                    </div>
                        
                
                
            </div>
        </div>
    )
};

export default Students;