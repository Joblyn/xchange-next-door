'use client'

import { navlinks } from '@/fixtures/navLink'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DropdownIcon from '../../../public/assets/icons/caret-down.svg'
import SignInIcon from '../../../public/assets/icons/sign-in.svg'
import useMediaQuery from '@/hooks/useMediaQuery'
import MobileSideBar from '../mobile-side-bar/mobile-side-bar'

export default function HeaderNav () {
  const pathname = usePathname()
  const isMobile = useMediaQuery(768)

  return (
    <header className='container-padding bg-white relative'>
      <nav className='flex flex-row items-center justify-between'>
        <Link href='/' className='w-[10%]'>
          <Image
            src='/assets/images/logo.svg'
            alt='Logo'
            width={50}
            height={24}
            priority
          />
        </Link>

        {/* {isMobile ? ( */}
          <MobileSideBar />
        {/* ) : ( */}
          <>
            <ul className='hidden md:flex flex-row items-center'>
              {navlinks.map((navlink, id) => (
                <li
                  key={id}
                  className={`${
                    pathname === navlink.route ? 'text-p-400' : 'text-p-600'
                  } flex justify-center flex-col mx-2 xl:mx-3 relative`}
                >
                  {navlink.dropdownItems ? (
                    <div className='flex items-center gap-[0.15rem]'>
                      <span>{navlink.name}</span>
                      <span>
                        <DropdownIcon />
                      </span>
                    </div>
                  ) : (
                    <div className=''>
                      <Link href={navlink.route}>{navlink.name}</Link>
                    </div>
                  )}
                  <div
                    className={`${
                      pathname === navlink.route ? 'w-full' : 'w-0'
                    } border-t border-p-400 transition-all absolute -bottom-[2px] left-1/2 -translate-x-1/2`}
                  ></div>
                </li>
              ))}
            </ul>
            <div className='md:flex flex-row gap-2 lg:gap-3 xl:gap-5 items-center hidden'>
              <Link href='/sign-in' className='text-p-600'>
                Sign In
              </Link>
              <Link
                href='/register'
                className='text-white bg-main-primary w-28 lg:w-32 h-10 text-center flex items-center justify-center rounded-md'
              >
                <SignInIcon className='mr-1' />
                Register
              </Link>
            </div>
          </>
        {/* )} */}
      </nav>
    </header>
  )
}
