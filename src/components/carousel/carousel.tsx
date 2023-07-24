'use client'

import { testimonials } from '@/fixtures/testimonials'
import Image from 'next/image'
import React from 'react'
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.scss'

const Carousel: React.FC = () => {

  const isMobile = useMediaQuery(576)
  const isDesktop = useMediaQuery(1024)

  return (
    <div>
      <SwiperContainer
        slidesPerView={isMobile ? 1 : isDesktop ? 2 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
      >
        {testimonials.map((testimonial, id) => {
          return (
            <SwiperSlide key={id}>
              <div
                className={`bg-white rounded-lg p-6 w-[18rem] sm:w-80 h-[24rem] sm:h-80 snap-center shrink-0 mx-auto`}
                key={id}
                aria-describedby={`testimonial-${id + 1}`}
                id={`testimonial-${id + 1}`}
              >
                <div className='flex flex-row gap-3 items-center mb-5'>
                  <Image
                    src={testimonial.img}
                    alt={`user ${id}`}
                    width={40}
                    height={40}
                  />
                  <span
                    className='font-[600] text-base'
                    aria-describedby='name'
                  >
                    {testimonial.name}
                  </span>
                </div>
                <p
                  aria-describedby='testimony'
                  className='text-g-800 text-base'
                >
                  {testimonial.testimony}
                </p>
              </div>
            </SwiperSlide>
          )
        })}
      </SwiperContainer>
    </div>
  )
}

export default Carousel
