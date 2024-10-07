import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

// import './styles.css';
import './style.css'

// import required modules
import { Pagination } from 'swiper/modules'

import { Autoplay } from 'swiper/modules';

// Importa los módulos necesarios
function Slider ()  {
    return (
        <>
        <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            autoplay={{
                delay: 3000, // Tiempo de espera en milisegundos (3 segundos)
                disableOnInteraction: false, // No se detiene al hacer clic o interactuar
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
                <img className='object-cover' src="https://img.freepik.com/foto-gratis/hermosa-mujer-rubia-joven-sonriente-apuntando-gafas-sol-sosteniendo-bolsas-compras-tarjeta-credito-pared-rosa_496169-1506.jpg?t=st=1727818924~exp=1727822524~hmac=33773e59aa98245b6769ec9b742c3a17816a80539c56ece75e50650f43d4119d&w=740" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://img.freepik.com/foto-gratis/concepto-compras-close-up-retrato-joven-hermosa-atractiva-redhair-nina-sonriente-mirando-camara-bolsa-compra-fondo-pastel-azul-copie-espacio_1258-860.jpg?t=st=1727819234~exp=1727822834~hmac=cc98ce7576ed9793c1edb928d08ba63c6784fda293c78fd3d6b0fbc064550e43&w=740" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://img.freepik.com/foto-gratis/joven-hermosa-mujer-rubia-chaqueta-sobre-pared-azul-telefono-movil-haciendo-compras-linea_496169-1447.jpg?t=st=1727819275~exp=1727822875~hmac=1af5f7fbadbceae4b58719ca71e5849a4edc30c117f9c70d1c69f285579eb63d&w=740" alt="" />
            </SwiperSlide>
            {/* <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide> */}
           
          </Swiper>
          <div className="caja absolute bottom-10">

            <h1>Esto es una caja tio"</h1>
        </div>
        </>
      );
};



export default Slider