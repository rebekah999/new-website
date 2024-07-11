import { Lato, Open_Sans } from 'next/font/google'

export const lato = Lato({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['100', '300', '400', '700', '900'],
})

export const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['400', '700'],
    })