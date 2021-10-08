import SpecialDishes from './SpecialDishes'
import Dishes from './Dishes'
import About from './About'
import Menu from './Menu'
import Reviews from './Reviews'
import styles from '@/styles/components/Main.module.scss'

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes />
      <Dishes />
      <About />
      <Menu />
      <Reviews />
    </main>
  )
}

export default Main
