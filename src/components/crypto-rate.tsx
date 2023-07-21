'use client'

import Image from 'next/image'

interface CryptoProps {
  name: string
  src: string
  value: string
  alt: string
}

const CryptoInput: React.FC<{ value: string }> = ({ value }) => {
  return (
    <input
      className='border border-g-300 p-1 md:p-3 text-g-700 text-sm sm:text-xl rounded-md w-14 sm:w-24 bg-g-100'
      type='text'
      readOnly
      value={value}
    />
  )
}

const Crypto: React.FC<CryptoProps> = props => {
  return (
    <div className='flex items-center last-of-type:flex-row-reverse w-[45%] sm:w-2/5 gap-2 xs:gap-[10%]'>
      <div className='flex items-center gap-2 lg:gap-6'>
        <span className='font-normal uppercase text-sm sm:text-xl'>
          {props.name}
        </span>
        <Image
          src={`/assets/icons/${props.src}.svg`}
          alt={props.alt}
          width={30}
          height={30}
          className='rounded-full w-5 h-5 object-contain sm:w-[30px] sm:h-[30px]'
        />
      </div>
      <CryptoInput value={props.value} />
    </div>
  )
}

const CryptoRate: React.FC = () => {
  return (
    <div
      className='flex justify-between items-center bg-g-50 border border-g-300 rounded-xl px-2 py-3 xs:p-5 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[650px]'
      aria-describedby='crypto conversion dialogue'
    >
      <Crypto name='usdt' src='tether' alt='usd tether' value='1.000' />
      <div className='w-[10%] sm:w-1/5'>
        <Image
          width={30}
          height={30}
          src='/assets/icons/arrows-left-right.svg'
          alt='left-right'
          className='mx-auto w-5 h-5 object-contain sm:w-[30px] sm:h-[30px]'
        />
      </div>
      <Crypto name='ngn' src='ngn' alt='ngn' value='732.56' />
    </div>
  )
}

export default CryptoRate
