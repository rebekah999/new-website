import ProjectsPageComponent from './ProjectsPageComponent'
import styles from './ProjectsPage.module.scss'

export const metadata = {
  title: 'Rebekah Fowler | Projects',
  description:
    'Explore the projects of Rebekah Fowler, showcasing expertise in data analysis and storytelling with real-world applications.',
}

export default function ProjectsPage() {
  return (
    <main className={styles.projectsPage}>
      <ProjectsPageComponent />
    </main>
  )
}
