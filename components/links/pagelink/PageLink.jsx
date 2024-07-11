'use client'
import Link from 'next/link'
import styles from './PageLink.module.scss'
import AnimatedSection from '@/libs/AnimatedSection'

export default function PageLink({ href, children }) {
  return (
    <AnimatedSection>
      <Link href={href} className={styles.pageLink}>
        {children}
      </Link>
    </AnimatedSection>
  )
}
