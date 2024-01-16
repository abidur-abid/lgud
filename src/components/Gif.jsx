import React from 'react';
import gif from '../assets/divider.gif'
import Image from 'next/image';

const Gif = () => {
    return (
        <div className='mx-auto'>
            <Image className='mx-auto' src={gif} alt="Gif Image"></Image>
        </div>
    );
};

export default Gif;