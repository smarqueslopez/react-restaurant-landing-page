import SpecialDishes from './SpecialDishes'
import Dishes from './Dishes'
import About from './About'
import Menu from './Menu'
import Reviews from './Reviews'
import Order from './Order'
import styles from '@/styles/components/Main.module.scss'

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes />
      <Dishes />
      <About />
      <Menu />
      <Reviews />
      <Order />
    </main>
  )
}

export default Main
