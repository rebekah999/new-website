'use client'
import AnimatedSection from '@/libs/AnimatedSection'
import styles from './ExternalLink.module.scss'

export default function ExternalLink({ children, href }) {
  return (
    <AnimatedSection>
      <a
        className={styles.externalLink}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    </AnimatedSection>
  )
}
