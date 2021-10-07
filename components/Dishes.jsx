import Dish from './Dish'
import dishes from '@/utils/dishes'
import styles from '@/styles/components/Dishes.module.scss'

function Dishes() {
  return (
    <section className={styles.dishes} id='dishes'>
      <h3 className={styles['dishes__sub-heading']}>our dishes</h3>
      <h1 className={styles.dishes__heading}>popular dishes</h1>
      <div className={styles['dishes__container']}>
        {dishes.map((item, index) => {
          return <Dish key={index} {...item} />
        })}
      </div>
    </section>
  )
}

export default Dishes
