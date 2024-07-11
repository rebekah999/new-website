'use client'
import projectsData from '../../../../libs/projectsData'
import SectionHeading from '@/components/headings/section-heading/SectionHeading'
import styles from './Projects.module.scss'
import Image from 'next/image'
import PageLink from '@/components/links/pagelink/PageLink'
import AnimatedSection from '@/libs/AnimatedSection'

export default function Projects() {
  return (
    <section className={styles.projects} id='projects'>
      <SectionHeading>Projects</SectionHeading>
      <div className={styles.projects__container} >
        {projectsData.map((project, index) => {
          return (
            <AnimatedSection key={project.id}>
              <div className={styles.projects__card}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                />
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.tech}</p>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    View {project.title}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
      <PageLink href='/projects'>Learn more about my projects</PageLink>
    </section>
  )
}
