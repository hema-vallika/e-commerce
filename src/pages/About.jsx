import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const About = () => {
  return (
    <div className='w-full h-96'>
      <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            
              <SwiperSlide >
                slide 1
              </SwiperSlide>
              <SwiperSlide >
                slide 1
              </SwiperSlide>
              <SwiperSlide >
                slide 1
              </SwiperSlide>
            
          </Swiper>
    </div>
  )
}

export default About