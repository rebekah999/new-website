// import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { lato, openSans } from './fonts'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Contact from '@/components/sections/contact/Contact'
import BackToTop from '@/components/links/back-to-top/BackToTop'
import '@/styles/globals.scss'

const header = lato
const body = openSans

export const metadata = {
  openGraph: {
    title: 'Rebekah Fowler || Data Analyst & Data Storyteller',
    description:
      'A freelance analyst with experience in freelancing, Python, SQL, Tableau, and data storytelling. I help businesses make data-driven decisions.',
    url: 'https://rebekahfowler.com',
    images: [
      {
        url: 'https://client-profile-rf-git-7f2d7b-joelborofskydevgmailcoms-projects.vercel.app/img/site-image.png',
        width: 800,
        height: 600,
        alt: 'Default OG Image Alt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://rebekahfowler.com',
    title: 'Rebekah Fowler || Data Analyst & Data Storyteller',
    description:
      'A freelance analyst with experience in freelancing, Python, SQL, Tableau, and data storytelling. I help businesses make data-driven decisions.',
    image:
      'https://client-profile-rf-git-7f2d7b-joelborofskydevgmailcoms-projects.vercel.app/img/site-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${header.variable} ${body.variable}`}>
        <ThemeProvider>
          <Header />
          <BackToTop />
          {children}
          <Contact />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
