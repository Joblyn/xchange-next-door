interface footerGroup {
  header: string
  links: string[]
}

export const footerGroups: footerGroup[] = [
  {
    header: 'Services',
    links: ['Sell Gift cards', 'Buy Gift Cards', 'P2P transactions', 'USDT']
  },
  {
    header: 'Support',
    links: ['Pricing Plan', 'Documentation', 'Guide', 'Tutorials']
  },
  {
    header: 'Company',
    links: ['About Us', 'Blog', 'Join Us', 'Press', 'Partners']
  },
  {
    header: 'Legal',
    links: ['FAQ', 'Privacy', 'P2P transactions', '(EUA / Terms) & Conditions']
  }
]
