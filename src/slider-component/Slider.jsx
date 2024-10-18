import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import '../style.css'
import '../index.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import SliderInfo from './SliderInfo';
// Importa los módulos necesarios
function Slider ({setSliderActive, sliderActive})  {


    const hanndleClass = !sliderActive ? 'hidden' : 'block'
    return (
        <>
        <div className={`${hanndleClass}`}>
        <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
    
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
                <img   
                className='img-slider relative object-cover'
                src="https://i.pinimg.com/564x/b0/f1/15/b0f1157a4402f1a760a8dfb70c8ccd59.jpg" 
                alt="" />
                <SliderInfo></SliderInfo>
            </SwiperSlide>
            {/* <SwiperSlide>
                <img 
                className='img-slider object-cover z-10'
                src="./images/img2mi.jpg"
                alt=""
                />
                
            </SwiperSlide>
            <SwiperSlide>
                <img 
                className='img-slider object-cover z-10'
                src="./images/img3.jpg" 
                alt="" />
            </SwiperSlide> */}
            {/* <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
    
        </div>
        
        </>
      );
};



export default Slider