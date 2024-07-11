import styles from './Footer.module.scss'


export default function Footer() {
    const currentYear = () => {
        const date = new Date()
        return date.getFullYear()
        
    }

    return (
      <footer className={styles.footer}>
        <p>© {currentYear()} Rebekah Fowler</p>
        <a href="https://joelborofsky.com">Developed & Designed by JBSky Dev</a>
      </footer>
    )
}