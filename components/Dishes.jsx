import Dish from './Dish'
import dishList from '@/utils/dishList'
import styles from '@/styles/components/Dishes.module.scss'

function Dishes() {
  return (
    <section className={styles.dishes} id='dishes'>
      <h3 className='sub-heading'>our dishes</h3>
      <h1 className='heading'>popular dishes</h1>
      <div className={styles['dishes__container']}>
        {dishList.map((item, index) => {
          return <Dish key={index} {...item} />
        })}
      </div>
    </section>
  )
}

export default Dishes
