import SectionHeading from '@/components/headings/section-heading/SectionHeading'
import styles from './About.module.scss'
import PageLink from '@/components/links/pagelink/PageLink'
import BodyText from '@/components/body-text/BodyText'

export default function About() {
    return (
      <section className={styles.about} id='about'>
        <SectionHeading>About</SectionHeading>
        <BodyText>
          Hello, I'm Rebekah Fowler, a freelance data analyst with two years of
          experience in freelancing. I specialize in Python, SQL, Tableau, and
          Excel, with expertise in working with financial data. My passion lies
          in unraveling the stories hidden within data, enabling organizations
          to make informed and impactful decisions.
        </BodyText>
        <PageLink href='/about'>Learn more about me</PageLink>
      </section>
    )
}