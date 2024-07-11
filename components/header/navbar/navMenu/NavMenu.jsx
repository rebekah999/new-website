'use client'
import { useRef } from 'react'
import { useClickOutside } from '@/libs/useClickOutside'
import { useToggleMenu } from '@/libs/useToggleMenu'
import InternalNavLink from '@/components/links/navlink/InternalNavLink'
import ThemeToggle from './theme-toggle/ThemeToggle'
import styles from './NavMenu.module.scss'

export default function NavMenu({ isMenuOpen, handleMenuToggle }) {
  const { isOpen, toggleMenu: toggleMenuState } = useToggleMenu(isMenuOpen)
  const menuRef = useRef(null)

  if (isMenuOpen !== isOpen) {
    toggleMenuState(isMenuOpen)
  }

  useClickOutside(menuRef, () => {
    if (isMenuOpen) {
      handleMenuToggle(false)
    }
  })

  const handleLinkClick = () => {
    handleMenuToggle(false)
  }

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }, // Keep '#contact' for internal scrolling
  ]

  return (
    <div
      ref={menuRef}
      className={`${styles.navMenu} ${isMenuOpen ? styles.opened : ''}`}
    >
      <nav>
        <ul>
          {navigationLinks.map(({ href, label }, index) => (
            <li key={index}>
              <InternalNavLink href={href} onClick={handleLinkClick}>
                {label}
              </InternalNavLink>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  )
}
