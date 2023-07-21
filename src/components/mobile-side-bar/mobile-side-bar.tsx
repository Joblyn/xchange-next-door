'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DropdownIcon from '../../../public/assets/icons/caret-down.svg'
import SignInIcon from '../../../public/assets/icons/sign-in.svg'
import { navlinks } from '@/fixtures/navLink'
import styles from './styles.module.scss'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import Dropdown from '../dropdown'
import Image from 'next/image'
import { createGlobalStyle } from 'styled-components'

type HamburgerProps = {
  showNav: boolean
  setShowNav: Dispatch<SetStateAction<boolean>>
}

export type DropdownState = {
  state: boolean
  id: null | number
}

const LockBody = createGlobalStyle`
  body {header
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`

const Hamburger: React.FC<HamburgerProps> = props => {
  const { showNav, setShowNav } = props

  return (
    <label htmlFor='check' className={styles.hamburger}>
      <input
        type='checkbox'
        checked={showNav}
        onChange={() => setShowNav(state => !state)}
        id='check'
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  )
}

export default function MobileSideBar () {
  const pathname = usePathname()

  const [showNav, setShowNav] = useState<boolean>(false)
  const [dropdown, setDropdown] = useState<DropdownState>({
    state: false,
    id: 0
  })

  const close = () => {
    setShowNav(false)
  }

  const onDropdownClick = (id: number) => {
    if (dropdown.state && dropdown.id === id) {
      setDropdown({ state: false, id: null })
    } else {
      setDropdown({ state: true, id })
    }
  }

  return (
    <div className='md:hidden'>
      {showNav && <LockBody />}
      <div>
        <Hamburger showNav={showNav} setShowNav={setShowNav} />
      </div>

      <div
        className={`bg-dark bg-opacity-10 w-screen h-screen fixed top-0 left-0 z-[1] ${
          showNav ? 'visible' : 'invisible'
        } transition-all`}
        onClick={close}
      ></div>

      <div
        className={`w-[14rem] bg-white min-h-screen overflow-y-auto shadow-lg fixed top-0 flex flex-col z-[5] ${
          showNav ? 'left-0' : '-left-[15rem]'
        } transition-all`}
      >
        <Link href='/' className='p-3'>
          <Image
            src='/assets/images/logo.svg'
            alt='Logo'
            width={50}
            height={24}
            priority
          />
        </Link>
        <ul className='flex flex-col divide-y divide-g-300'>
          {navlinks.map((navlink, id) => (
            <li
              key={id}
              className={`${
                pathname === navlink.route ? 'text-p-400' : 'text-p-600'
              }`}
              onClick={() => console.log('clicked')}
            >
              {navlink.dropdownItems ? (
                <div className='relative'>
                  <div
                    className='flex items-center gap-[0.15rem] p-3'
                    role='button'
                    onClick={() => onDropdownClick(id)}
                  >
                    <span>{navlink.name}</span>
                    <span>
                      <DropdownIcon
                        className={`${
                          dropdown.state && dropdown.id === id
                            ? 'rotate-180'
                            : 'rotate-0'
                        } transiton-all duration-150`}
                      />
                    </span>
                  </div>
                  <Dropdown
                    show={dropdown.state && dropdown.id === id}
                    items={navlink.dropdownItems}
                    setDropdown={setDropdown}
                  />
                </div>
              ) : (
                <Link href={navlink.route}>
                  <div className='p-3'>{navlink.name}</div>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className='mt-auto divide-y divide-g-300 py-4'>
          <div className='p-3'>
            <Link href='/sign-in' className='text-p-600'>
              Sign In
            </Link>
          </div>
          <div className='p-3'>
            <Link
              href='/register'
              className='text-white bg-main-primary w-28 lg:w-32 h-10 text-center flex items-center justify-center rounded-md'
            >
              <SignInIcon className='mr-1' />
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
