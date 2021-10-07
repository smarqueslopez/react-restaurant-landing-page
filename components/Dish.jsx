import Stars from './StarRating'
import styles from '@/styles/components/Dish.module.scss'
import classNames from 'classnames'

function Dish({ title, img, rating, price }) {
  return (
    <div className={styles.dish}>
      <a
        href='#'
        className={classNames('fas', 'fa-heart', styles.dish__favorite)}
      ></a>
      <a
        href='#'
        className={classNames('fas', 'fa-eye', styles.dish__detail)}
      ></a>
      <img className={styles.dish__image} src={img} alt={title} />
      <h3 className={styles.dish__title}>{title}</h3>
      <Stars value={rating} />
      <span className={styles.dish__price}>{`$${price}`}</span>
      <a href='#' className='button'>
        add to cart
      </a>
    </div>
  )
}

export default Dish
