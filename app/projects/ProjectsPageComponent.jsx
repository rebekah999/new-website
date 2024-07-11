'use client'
import Image from 'next/image'
import projectsData from '@/libs/projectsData'

import MainHeading from '@/components/headings/main-heading/MainHeading'
import SubHeading from '@/components/headings/sub-heading/SubHeading'
import AnimatedSection from '@/libs/AnimatedSection'
import styles from './ProjectsPage.module.scss'

export default function ProjectsPageComponent() {
  return (
    <>
      <MainHeading>Projects</MainHeading>
      <div className={styles.projectsPage__container}>
        {projectsData.map((project, index) => {
          return (
            <AnimatedSection key={project.id}>
              <div className={styles.projectsPage__card}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                />
                <div>
                  <SubHeading>{project.title}</SubHeading>
                  <p>{project.tech}</p>
                  <p>{project.description}</p>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    View {project.title}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </>
  )
}
