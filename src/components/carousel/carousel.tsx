'use client'

import { testimonials } from '@/fixtures/testimonials'
import Image from 'next/image'
import { useState } from 'react'

const Carousel: React.FC = () => {
  const [active, setActive] = useState<number>(0)

  return (
    <div className="">
      <div
        className={`py-10 px-20 md:px-20 flex flex-row flex-nowrap overflow-x-auto w-full gap-5 snap-x snap-proximity snap-always scrollbar-none scrollbar-h-0`}
      >
        {testimonials.map((testimonial, id) => {
          return (
            <div
              className={`bg-white rounded-lg p-5 w-80 h-[20rem] snap-center  shrink-0`}
              key={id}
              aria-describedby={`testimonial ${id}`}
            >
              <div className='flex flex-row gap-3 items-center mb-5'>
                <Image
                  src={testimonial.img}
                  alt={`user ${id}`}
                  width={40}
                  height={40}
                />
                <span className='font-[600] text-base' aria-describedby='name'>
                  {testimonial.name}
                </span>
              </div>
              <p aria-describedby='testimony' className='text-g-800 text-base'>
                {testimonial.testimony}
              </p>
            </div>
          )
        })}
      </div>

      <div className='carousel-indicators flex flex-row items-center justify-center gap-2 w-full pt-4'>
        {testimonials.map((e, id) => {
          return (
            <div
              key={id}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                id === active ? 'bg-p-400' : 'bg-g-300'
              }`}
              onClick={() => setActive(id)}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
