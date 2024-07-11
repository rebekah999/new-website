import SectionHeading from '@/components/headings/section-heading/SectionHeading'
import styles from './Contact.module.scss'
import BodyText from '@/components/body-text/BodyText'

export default function Contact() {
    return (
      <section className={styles.contact} id='contact'>
        <SectionHeading>Contact</SectionHeading>
        <BodyText>
          I am currently looking for new opportunities in data analysis and data
          science. If you would like to get in touch with me, please feel free
          to reach out to me via email or LinkedIn.
        </BodyText>
        <div>
          <a
            href='mailto:contact@rebekahfowler.com'
          >
            Email
          </a>
          <a
            href='https://www.linkedin.com/in/rebekah-fowler999'
            target='_blank'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/rebekah999'
            target='_blank'
          >
            GitHub
          </a>
          <a
            href='https://medium.com/@rebekah.fowler'
            target='_blank'
          >
            Medium
          </a>
        </div>
      </section>
    )
    }