import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-green-600 mb-2 text-2xl'>{subHeading}</p>
            <p className='text-4xl uppercase border-y-4 py-4'>{heading}</p>
        </div>
    );
};

export default SectionTitle;