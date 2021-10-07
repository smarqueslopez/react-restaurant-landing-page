import { useState } from 'react'
import classNames from 'classnames'
import styles from '@/styles/components/StarRating.module.scss'

function StarRating({ min = 0, max = 5, value }) {
  const [rating, setRating] = useState(value)
  const [hover, setHover] = useState(min)
  return (
    <div className={styles['star-rating']}>
      {[...Array(max)].map((star, index) => {
        const ratingValue = index + 1
        return (
          <span
            key={index}
            data-value={ratingValue}
            className={classNames('fas', 'fa-star', styles.star, {
              [styles['marked']]: (hover || rating) >= ratingValue
            })}
            onClick={() => setRating(ratingValue)}
            onMouseOver={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(min)}
          />
        )
      })}
    </div>
  )
}

export default StarRating
