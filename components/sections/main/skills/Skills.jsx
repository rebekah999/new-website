'use client'
import skillsData from '../../../../libs/skillsData'
import InternalNavLink from '@/components/links/navlink/InternalNavLink'
import SectionHeading from '@/components/headings/section-heading/SectionHeading'
import styles from './Skills.module.scss'
import PageLink from '@/components/links/pagelink/PageLink'
import AnimatedSection from '@/libs/AnimatedSection'

export default function Skills() {
  return (
    <section className={styles.skills} id='skills'>
      <SectionHeading>Skills</SectionHeading>
      <div>
        {skillsData.map((skill, index) => (
          <AnimatedSection key={skill.id}>
            <div key={index}>
              <InternalNavLink
                href={`/skills#${skill.id}`}
                className={styles.skills__links}
              >
                {skill.svg}
                <p>{skill.name}</p>
              </InternalNavLink>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <PageLink href='/skills'>Learn more about my skills</PageLink>
    </section>
  )
}
