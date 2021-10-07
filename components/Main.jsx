import SpecialDishes from './SpecialDishes'
import Dishes from './Dishes'
import styles from '@/styles/components/Main.module.scss'

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes />
      <Dishes />
    </main>
  )
}

export default Main
