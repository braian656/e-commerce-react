
// hooks
import React, { useContext, useRef, useState } from 'react';
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

// provider


function Slider ({activeComponents})  {

    console.log('COMPONENT SLIDER')
    const handleClass = !activeComponents ? 'hidden' : 'block'
    // let classItem
    // if(!activeComponents){
    //     classItem = 'hidden'
    // }

    
    return (
        <>
        
    
        <div className={`block`}>
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
            className="mySwiper"
            id="swiper"
            >

            <SwiperSlide id='swiper-slide'>

                <SliderInfo></SliderInfo>

            </SwiperSlide>
        </Swiper>
    
        </div>
        

        
        
        </>
    );
};



export default Slider