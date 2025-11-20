import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import amazon from '../assets/brands/amazon.png';
import amazon_vector from '../assets/brands/amazon_vector.png';
import casio from '../assets/brands/casio.png';
import moonstar from '../assets/brands/moonstar.png';
import randstad from '../assets/brands/randstad.png';
import star from '../assets/brands/star.png';
import start_people from '../assets/brands/start_people.png';


const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people];

const Brand = () => {
    return (
        <div className='my-15 max-w-10/12 mx-auto'>
            <h2 className='font-bold text-center mb-10 text-2xl text-green-900'>We've helped thousands ofsales teams</h2>
            <Swiper
    
            loop={true}
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
        >
            {
                brandLogos.map((logo, index) => <SwiperSlide key={index}>
                    <img src={logo} alt="" />
                </SwiperSlide>)
            }

        </Swiper>
        </div>
        
    );
};

export default Brand;