import Link from 'next/link'
import styles from './Logo.module.scss'

export default function Logo(){
    return (
        <Link href='/' className={styles.logo}>Rebekah Fowler</Link>
    )
}