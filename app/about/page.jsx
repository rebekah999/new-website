import BodyText from '@/components/body-text/BodyText'
import styles from './AboutPage.module.scss'
import SectionHeading from '@/components/headings/section-heading/SectionHeading'
import SubHeading from '@/components/headings/sub-heading/SubHeading'
import ExternalLink from '@/components/links/externallink/ExternalLink'
import MainHeading from '@/components/headings/main-heading/MainHeading'

export const metadata = {
  title: 'Rebekah Fowler | About',
  description:
    'Learn more about Rebekah Fowler, a freelance data analyst specializing in Python, SQL, Tableau, and Excel with expertise in financial data analysis.',
}

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <MainHeading>About</MainHeading>
      <BodyText>
        I'm Rebekah Fowler, a freelance data analyst with two years of
        experience in freelancing. I specialize in Python, SQL, Tableau, and
        Excel, with expertise in working with financial data. My passion lies in
        unraveling the stories hidden within data, enabling organizations to
        make informed and impactful decisions.
      </BodyText>
      <section>
        <SectionHeading>Education</SectionHeading>
        <ul>
          <li>
            <SubHeading>Google Advanced Data Analytics</SubHeading>
            <BodyText>
              Throughout this program, I delved deep into the realm of
              statistical analysis, Python programming, regression modeling, and
              machine learning. Through hands-on projects and real-world case
              studies, I honed my skills in data visualization using powerful
              tools like Jupyter Notebook and Tableau Software.
            </BodyText>
            <ExternalLink href='https://www.coursera.org/account/accomplishments/professional-cert/SQR2C5TTLDLA?utm_product=prof'>
              Certification issued 2023
            </ExternalLink>
          </li>

          <li>
            <SubHeading>Datacamp Associate Data Scientist in Python</SubHeading>
            <BodyText>
              The track commenced with a solid foundation in Python for data
              science. Through interactive exercises, I gained a strong grasp of
              essential libraries like Pandas, Seaborn, and Scikit-Learn. These
              exercises solidified my understanding of data manipulation
              techniques, data visualization best practices, and statistical
              analysis methods.
            </BodyText>
            <ExternalLink href='https://www.datacamp.com/completed/statement-of-accomplishment/track/123679caa06b239d7c6079b805ead208d4e12b8f'>
              Certification issued 2019
            </ExternalLink>
          </li>

          <li>
            <SubHeading>Datacamp Data Analyst with Python</SubHeading>
            <BodyText>
              During this course, I learned how to import, clean, manipulate,
              and visualize data using popular Python libraries such as Pandas,
              NumPy, and Seaborn. Additionally, I worked with real-world
              datasets to enhance my data manipulation and exploratory data
              analysis skills.
            </BodyText>
            <ExternalLink href='https://www.datacamp.com/statement-of-accomplishment/track/feeb81c30a63619614916de6cf27d6817e1d6fad?raw=1'>
              Certification issued 2018
            </ExternalLink>
          </li>
        </ul>
      </section>
    </main>
  )
}
