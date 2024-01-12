import Image from 'next/image';
import React from 'react';
import LoginForm from './LoginForm';
import Gif from '@/components/Gif';

const Login = () => {
    return (
        <div className="section">
            <div className="container">
                <Gif/>
                <LoginForm/>
                <Gif/>
            </div>
        </div>
    );
};

export default Login;