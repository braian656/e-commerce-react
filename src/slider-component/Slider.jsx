import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import '../style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Importa los módulos necesarios
function Slider ({setSliderActive, sliderActive})  {


    const hanndleClass = !sliderActive ? 'hidden' : 'block'
    return (
        <>
        <div className={`${hanndleClass} relative`}>
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
            
                className='object-cover z-10'
                src="https://images.pexels.com/photos/26600776/pexels-photo-26600776/free-photo-of-mar-puesta-de-sol-playa-oceano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                className='object-cover z-10'
                src="https://images.pexels.com/photos/26704682/pexels-photo-26704682/free-photo-of-naturaleza-agua-fotografia-de-animales-delfin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                className='object-cover z-10'
                src="https://images.pexels.com/photos/15304506/pexels-photo-15304506/free-photo-of-camara-lente-objetivo-antiguo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
        <div className="caja absolute bottom-10 z-60">

            <h1 className='font-bold text-red-500'>Esto es una caja tio</h1>
        </div>
        </div>
        
        </>
      );
};



export default Slider