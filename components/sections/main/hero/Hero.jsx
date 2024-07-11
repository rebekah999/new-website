import MainHeading from '@/components/headings/main-heading/MainHeading'
import styles from './Hero.module.scss'

import BackgroundArt from './background-art/BackgroundArt'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <MainHeading>Rebekah Fowler</MainHeading>
        <h2>Data Analyst & Data Storyteller</h2>
      </div>
      <BackgroundArt />
    </section>
  )
}
