'use client'
import { useRef } from 'react'
import { useScrollPosition } from '@/libs/useScrollPosition'
import { useNavbarHeight } from '@/libs/useNavbarHeight'
import styles from './BackToTop.module.scss'

export default function BackToTop() {
  const buttonRef = useRef(null)
  const navbarHeight = useNavbarHeight()
  const isShown = useScrollPosition(navbarHeight)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <a
      ref={buttonRef}
      className={`${styles.backToTop} ${isShown ? styles.isShown : ''}`}
      href='#nav'
      onClick={(e) => {
        e.preventDefault()
        scrollToTop()
      }}
    >
      <svg
        fill='none'
        height='24'
        viewBox='0 0 24 24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g stroke='none' strokeLinejoin='round' strokeWidth='1.00088'>
          <circle cx='12' cy='12' r='8' />
          <path d='m11.7499 8.75004v6.49996' />
          <path d='m14.75 11.25c-1.1716-1.1715-1.8284-1.82838-3-2.99996l-3 2.99996' />
        </g>
      </svg>
      <span className='sr-only'>Back to top</span>
    </a>
  )
}
