import SpecialDishes from './SpecialDishes'
import Dishes from './Dishes'
import About from './About'
import styles from '@/styles/components/Main.module.scss'

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes />
      <Dishes />
      <About />
    </main>
  )
}

export default Main
