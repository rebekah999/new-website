'use client'
import skillsData from '@/libs/skillsData'
import useSmoothScrollOffset from '@/libs/useSmoothScrollOffset'
import MainHeading from '@/components/headings/main-heading/MainHeading'
import BodyText from '@/components/body-text/BodyText'
import SubHeading from '@/components/headings/sub-heading/SubHeading'
import styles from './SkillsPage.module.scss'

export default function SkillsPageComponent() {
  useSmoothScrollOffset(100)

  return (
    <main className={styles.skillsPage}>
      <MainHeading>Skills</MainHeading>
      <ul>
        {skillsData.map((skill, index) => (
          <li className={styles.skillsPage__card} key={skill.id} id={skill.id}>
            {skill.svg}
            <SubHeading>{skill.name}</SubHeading>
            <BodyText>{skill.description}</BodyText>
          </li>
        ))}
      </ul>
    </main>
  )
}
