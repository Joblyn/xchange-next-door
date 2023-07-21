import Carousel from '@/components/carousel/carousel'
import CryptoRate from '@/components/crypto-rate'
import HeaderNav from '@/components/header-nav/header-nav'
import { features } from '@/fixtures/features'
import { footerGroups } from '@/fixtures/footerGroups'
import { giftCards } from '@/fixtures/giftcards'
import { socials } from '@/fixtures/socials'
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
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-p-600 leading-[1.25] tracking-[-1px] lg:tracking-[-1.92px] mb-5 w-[80%] md:w-full'>
            Effortlessly trade your <span className='text-s-600'>crypto</span>{' '}
            and <span className='text-s-600'>gift cards</span>
          </h2>
          <p>
            Trading on <strong>“Exchange Next Door”</strong> is easy,
            hassle-free, convenient and efficient.
          </p>
        </div>

        <div className='col-start-2 col-span-10 mt-10 lg:mt-16'>
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

      <section className='container-padding-x container-padding-y'>
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
        className='container-padding-x container-padding-y text-center'
        aria-describedby='popular gift cards'
      >
        <h2 className='text-black section-header'>Popular gift cards</h2>
        <p className='text-g-700 section-description'>
          Popular gift cards that users/merchants can buy/sell
        </p>

        <div className='p-6 md:p-0 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16'>
          {giftCards.map((giftcard, id) => {
            return (
              <div aria-describedby={`${giftcard.name} giftcard`} key={id}>
                <Image
                  src={giftcard.src}
                  alt={giftcard.alt}
                  width={200}
                  height={200}
                  priority
                  className='w-full h-auto object-contain'
                />
              </div>
            )
          })}
        </div>

        <div>
          <button
            className='text-white text-base md:text-lg bg-p-400 rounded-md py-4 px-6 lg:py-6 lg:px-12 hover:bg-opacity-90 transition-all'
            aria-describedby='explore more gift cards'
          >
            Explore more gift cards
          </button>
        </div>
      </section>

      <section
        aria-describedby='testimonials'
        className='container-padding-y bg-p-50'
      >
        <div className='container-padding text-center'>
          <h2 className='text-black section-header'>
            Trusted by over 50,000 users
          </h2>
          <p className='text-g-700 section-description'>
            Our users have good things to say about using the web app. Join us
            today!
          </p>
        </div>
        <Carousel />
      </section>

      <section
        aria-describedby='get started'
        className='container-padding-x container-padding-y bg-p-600 text-center text-white'
      >
        <h2 className='section-header'>Made just for you</h2>
        <p className='section-description'>
          Open an Exchange Next Door account from your phone or computer and
          follow the simple on-screen steps to register for an account in
          minutes.
        </p>

        <div className='pt-8'>
          <button
            className='text-dark text-base lg:text-lg bg-main-secondary rounded-md py-4 px-6 lg:py-6 lg:px-12 hover:bg-opacity-90 transition-all'
            aria-describedby='get started button'
          >
            Get Started today
          </button>
        </div>
      </section>

      <footer
        aria-describedby='subscribe to newsletters'
        className='container-padding-x container-padding-y text-center'
      >
        <div aria-describedby='subscribe to newsletters' className='mb-16'>
          <h2 className='section-header text-main-primary '>
            Subscribe to our newsletters
          </h2>
          <p className='section-description text-g-700'>
            Get the latest news about our product and services
          </p>

          <div className='flex w-full md:w-[4/5] max-w-2xl flex-col items-center justify-center md:flex-row mx-auto text-base lg:text-lg gap-4 md:gap-0 mt-8'>
            <label className='sr-only'>Email</label>
            <input
              className='w-full h-16 text-g-700 p-3 bg-p-100 rounded-r-md md:rounded-r-none rounded-l-md'
              type='email'
              name='email'
              placeholder='Enter your email'
            />
            <button className='w-36 h-16 text-white p-3 bg-p-600 rounded-l-md md:rounded-l-none rounded-r-md'>
              Subscribe
            </button>
          </div>
        </div>
        <div className='h-[2px] bg-g-50 w-4/5 md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto'></div>
        <div
          className='container-padding-y grid grid-cols-12 gap-x-3 gap-y-6 text-left'
          aria-describedby='links'
        >
          <div className='col-span-12 lg:col-span-4 pr-6'>
            <Image
              src='/assets/images/logo-with-name.svg'
              alt='logo'
              width={120}
              height={24}
              className='mb-6 w-36 h-auto'
            />
            <p className='text-dark mb-6'>
              Effortlessly trade your gift cards for USDT with a verified
              merchant. Sell your USDT and get paid in your local currency.
            </p>
            <div
              className='flex flex-row gap-3'
              aria-describedby='social links'
            >
              {socials.map((social, id) => (
                <span className='hover:scale-[1.2] cusor-pointer' key={id}>
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={34}
                    height={34}
                    className='w-10'
                  />
                </span>
              ))}
            </div>
          </div>
          {footerGroups.map((group, id) => (
            <div className='col-span-12 md:col-span-6 lg:col-span-2' key={id}>
              <h6 className='text-p-400 text-[1.2rem] font-[600] mb-5'>
                {group.header}
              </h6>
              <div className='flex flex-col gap-3 lg:gap-4'>
                {group.links.map((link, link_id) => (
                  <div key={link_id} className='text-g-700'>
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='h-[2px] bg-g-50 w-4/5 md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto'></div>

        <p className='text-g-800 pt-12'>
          © Exchange Next Door 2023. All right reserved
        </p>
      </footer>
    </main>
  )
}
