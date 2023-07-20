'use client'

import useOnClickOutside from '@/hooks/useOnclickOutside'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { DropdownState } from './mobile-side-bar/mobile-side-bar'

type DropdownProps = {
  items: string[]
  show: boolean
  setDropdown: Dispatch<SetStateAction<DropdownState>>
}

const Dropdown: React.FC<DropdownProps> = ({ items, show, setDropdown }) => {
  const dropdownRef = useRef(null)

  useOnClickOutside(dropdownRef, show, () =>
    setDropdown({ state: false, id: null })
  )

  return (
    <div
      ref={dropdownRef}
      className={`w-20 bg-white rounded-md shadow-md text-p-600 text-sm abssolute top-1/2 left-1/2 md:top-full md:left-0  ${
        show
          ? 'opacity-100 visible translate-y-0'
          : 'opactiy-0 invisible -translate-y-1'
      } `}
    >
      <ul className='divide-y divide-g-300'>
        {items.map((item, id) => (
          <li className='p-2' key={id}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
