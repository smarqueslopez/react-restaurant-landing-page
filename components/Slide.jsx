import styles from '@/styles/components/Slide.module.scss'

function Slide({ title, subtitle, description, img }) {
  return (
    <div className={styles.slide}>
      <div className={styles.slide__content}>
        <span className={styles.slide__subtitle}>{subtitle}</span>
        <h3 className={styles.slide__title}>{title}</h3>
        <p className={styles.slide__description}>{description}</p>
        <a href='#' className='button'>
          order now
        </a>
      </div>
      <div className={styles.slide__image}>
        <img src={img} alt={title} />
      </div>
    </div>
  )
}

export default Slide
