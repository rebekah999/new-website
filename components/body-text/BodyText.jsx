'use client'
import AnimatedSection from '@/libs/AnimatedSection'
import styles from './BodyText.module.scss'

export default function BodyText({ children }) {
  return (
    <AnimatedSection>
      <p className={styles.bodyText}>{children}</p>
    </AnimatedSection>
  )
}
