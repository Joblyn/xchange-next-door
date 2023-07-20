import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Xchange Next Door',
  description: 'Xchange Next Door'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
