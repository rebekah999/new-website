
import styles from './SubHeading.module.scss'

export default function SubHeading({ children }) {
  return( 

      <h3 className={styles.subHeading}> {children}</h3>
 
)
}
