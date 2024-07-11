'use client'
import AnimatedSection from '@/libs/AnimatedSection'
import styles from './SectionHeading.module.scss'

export default function SectionHeading({ children }) {
  return (
    <AnimatedSection>
      <h2 className={styles.sectionHeading}>{children}</h2>
    </AnimatedSection>
  )
}
