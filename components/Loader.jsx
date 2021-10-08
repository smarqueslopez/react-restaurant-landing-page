import { useEffect } from 'react'
import styles from '@/styles/components/Loader.module.scss'

function Loader() {
  useEffect(() => {
    window.onload = () =>
      setInterval(() => {
        document
          .querySelector(`.${styles.loader}`)
          .classList.add(styles['fade-out'])
      }, 3000)
  }, [])

  return (
    <div className={styles.loader}>
      <img src='images/loader.gif' alt='loader' />
    </div>
  )
}

export default Loader
