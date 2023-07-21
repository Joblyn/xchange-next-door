import Carousel from '@/components/carousel/carousel'
import CryptoRate from '@/components/crypto-rate'
import HeaderNav from '@/components/header-nav/header-nav'
import { features } from '@/fixtures/features'
import { giftCards } from '@/fixtures/giftcards'
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
        <div className='col-start-2 col-span-10 md:col-start-4 md:col-span-6 my-12 text-center flex flex-col justify-center items-center'>
          <h1 className='uppercase text-dark text-base mb-3 font-bold'>
            Exchange Next Door
          </h1>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-p-600 leading-[1.25] tracking-[-1px] lg:tracking-[-1.92px] mb-5 w-[80%] md:w-full'>
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

      <section className='container-padding py-16 md:py-24'>
        {features.map((feature, id) => {
          return (
            <div
              key={id}
              className={`flex flex-col w-full ${
                id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } py-5 px-5 md:px-0 gap-4 md:gap-0`}
              aria-labelledby='feature'
              aria-describedby={`feature: ${feature.title.toLowerCase()}`}
            >
              <div
                className={`${
                  id % 2 === 0 ? 'md:pr-4' : 'md:pl-4'
                } w-full md:w-1/2 flex flex-col items-center justify-center md:justify-start md:items-start gap-4 text-center md:text-left`}
              >
                <h3
                  className={`${
                    id % 2 === 0 ? 'text-s-700' : 'text-p-400'
                  } uppercase text-base `}
                  aria-describedby='feature tag'
                >
                  {feature.tag}
                </h3>
                <h4
                  className='text-black text-2xl md:text-3xl font-bold'
                  aria-describedby='feature title'
                >
                  {feature.title}
                </h4>
                <p
                  className='text-g-700 text-lg mb-2 w-[80%] md:w-full'
                  aria-describedby='feature description'
                >
                  {feature.info}
                </p>
                <button
                  className='py-2.5 px-5 text-sm rounded-md border border-p-300 bg-white text-p-400 flex text-center justify-center items-center'
                  aria-describedby='feature learn more button'
                >
                  Learn more
                  <Image
                    src='assets/icons/arrow-up-right.svg'
                    width={20}
                    height={20}
                    alt='up right'
                  />
                </button>
              </div>
              <div
                className={`${
                  id % 2 === 0 ? 'md:pl-4' : 'md:pr-4'
                } w-full md:w-1/2 flex flex-col items-center justify-center`}
              >
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          )
        })}
      </section>

      <section
        className='container-padding py-16 md:py-24 text-center'
        aria-describedby='popular gift cards'
      >
        <h2 className='text-black text-2xl md:text-3xl font-bold mb-4'>
          Popular gift cards
        </h2>
        <p className='text-g-700 text-lg mb-8'>
          Popular gift cards that users/merchants can buy/sell
        </p>

        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16'>
          {giftCards.map((giftcard, id) => {
            return (
              <div aria-describedby={`${giftcard.name} giftcard`} key={id}>
                <Image
                  src={giftcard.src}
                  alt={giftcard.alt}
                  width={200}
                  height={200}
                  className='w-full h-auto object-contain'
                />
              </div>
            )
          })}
        </div>

        <div>
          <button
            className='text-white text-base lg:text-lg bg-p-400 rounded-md py-4 px-6 lg:py-6 lg:px-12 hover:bg-white hover:text-p-400 transition-all'
            aria-describedby='explore more gift cards'
          >
            Explore more gift cards
          </button>
        </div>
      </section>

      <section aria-describedby='testimony' className='py-16 md:py-24 bg-p-50'>
        <div className="container-padding">
          <h2 className='text-black text-2xl md:text-3xl font-bold mb-4 text-center'>
            Trusted by over 50,000 users
          </h2>
          <p className='text-g-700 text-lg mb-8 text-center mx-auto'>
            Our users have good things to say about using the web app.
            <br /> Join us today!
          </p>
        </div>

        <Carousel />
      </section>
    </main>
  )
}
