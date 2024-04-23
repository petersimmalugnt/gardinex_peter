import React from 'react';
import Button from './Button/Button';
import Link from 'next/link';

const CookiePopup = () => {
    return (
        <div className='w-[375px] sm:w-auto fixed bottom-side-xs right-side-xs sm:left-side-xs bg-white text-center flex flex-col z-50 px-sm py-[1.25rem] gap-xs'>
            <p className='text-xs'>This website uses cookies to ensure you get the best experience. <Link href="/" className='link inline-flex'>Learn more.</Link></p>
            <div className='w-full grid auto-cols-fr grid-flow-col place-items-center'>
                <Button href='/' variant='plain' className=''>Preferences</Button>
                <Button variant='plain' className=''>Accept</Button>
                <Button variant='plain' className=''>Close</Button>
            </div>
        </div>
    );
};

export default CookiePopup;