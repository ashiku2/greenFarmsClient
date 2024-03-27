import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item'>
            <SectionTitle subHeading={"check it out"} heading={"Featured Item"}></SectionTitle>
            <div className='md:flex justify-center items-center py-8 px-16'>
                <div>
                    <img src="https://i.ibb.co/mGpB7F9/Modern-Gaming-Cover-You-Tube-Channel-Art-1.png" alt="" />
                </div>
                <div>
                    <p>Aug 20, 2024</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quidem voluptas voluptate rem aliquid beatae minima consequatur. Quod nihil architecto dolore assumenda! Veniam iusto quia, sit temporibus harum quos quisquam.</p>
                    <button className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;