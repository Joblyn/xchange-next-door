import CryptoRate from '@/components/crypto-rate'
import HeaderNav from '@/components/header-nav/header-nav'
import Image from 'next/image'

export default function Home () {
  return (
    <main className='max-w-screen-2xl mx-auto'>
      <HeaderNav />
      <section
        className='container-padding bg-p-50 grid grid-cols-12 relative'
        aria-labelledby='hero'
        aria-describedby='hero section'
      >
        <div className='col-start-2 col-span-10 md:col-start-4 md:col-span-6 my-12 text-center'>
          <h1 className='uppercase text-dark text-base mb-3 font-bold'>
            Exchange Next Door
          </h1>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-p-600 leading-[1.25] tracking-[-1px] lg:tracking-[-1.92px] mb-5'>
            Effortlessly trade your <span className='text-s-600'>crypto</span>{' '}
            and <span className='text-s-600'>gift cards</span>
          </h2>
          <p>
            Trading on <strong>“Exchange Next Door”</strong> is easy,
            hassle-free, convenient and efficient.
          </p>
        </div>

        <div className='col-start-2 col-span-10 md:mt-10 lg:mt-20'>
          <Image
            src='/assets/images/cards.svg'
            alt='gift cards'
            width={700}
            height={500}
            priority
            className='w-full h-auto'
          />
        </div>

        <CryptoRate />
      </section>
    </main>
  )
}
