export interface NavLink {
  name: string
  route: string
  dropdownItems?: string[]
}

export const navlinks: NavLink[] = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Products',
    route: 'products',
    dropdownItems: [
      "products 1",
      "products 2",
    ],
  },
  {
    name: 'Services',
    route: 'services',
    dropdownItems: [
      "service 1",
      "service 2",
      "service 3",
    ],
  },
  {
    name: 'Learn',
    route: 'learn',
    dropdownItems: [
      "learn 1",
      "learn 2",
    ],
  },
  {
    name: 'About Us',
    route: '/about'
  },
  {
    name: 'Contact',
    route: '/contact'
  }
]
