import Image from 'next/image';
import React from 'react';
import login from '../../../assets/login.png'

const LoginForm = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <Image src={login}></Image>
                    </div>
                    <div className="column">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;