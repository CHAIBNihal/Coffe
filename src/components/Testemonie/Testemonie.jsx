// components/TestimonialSlider.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { testimonials } from '../../constants/menu'

const TestimonialSlider = () => {
  return (
    <div className="py-16 px-4 mt-3 md:px-20 text-white">
      <h2 className="text-3xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-r from-neutral-400 to-[#C08267] bg-clip-text text-transparent">
        What Our Customers Say
      </h2>

      <Swiper
        effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-neutral-800 p-8 rounded-3xl  text-center">
              <p className="text-lg italic mb-6 text-neutral-200">“{t.message}”</p>
              <div className="rounded-full shadow-xl shadow-neutral-600 h-20 w-20 flex justify-center items-center mx-auto mb-3 overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-[#C08267]">{t.name}</h3>
              <span className="text-sm text-neutral-400">{t.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
