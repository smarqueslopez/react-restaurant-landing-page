import classNames from 'classnames'
import styles from '@/styles/components/Order.module.scss'

function Order() {
  return (
    <section className={styles.order} id='order'>
      <h3 className='sub-heading'>order now</h3>
      <h1 className='heading'>free and fast</h1>
      <form action='#' className={styles.form}>
        <div className={styles.order__container}>
          <div className={styles.form__item}>
            <span className={styles.label}>your name</span>
            <input
              className={styles.input}
              type='text'
              placeholder='enter your name'
            ></input>
          </div>
          <div className={styles.form__item}>
            <span className={styles.label}>your number</span>
            <input
              className={styles.input}
              type='text'
              placeholder='enter your number'
            ></input>
          </div>
        </div>
        <div className={styles.order__container}>
          <div className={styles.form__item}>
            <span className={styles.label}>your order</span>
            <input
              className={styles.input}
              type='text'
              placeholder='enter food name'
            ></input>
          </div>
          <div className={styles.form__item}>
            <span className={styles.label}>additional food</span>
            <input
              className={styles.input}
              type='text'
              placeholder='extra with food'
            ></input>
          </div>
        </div>
        <div className={styles.order__container}>
          <div className={styles.form__item}>
            <span className={styles.label}>how much</span>
            <input
              className={styles.input}
              type='number'
              placeholder='how many orders'
            ></input>
          </div>
          <div className={styles.form__item}>
            <span className={styles.label}>date and time</span>
            <input
              className={styles.input}
              type='datetime-local'
              placeholder='date and time'
            ></input>
          </div>
        </div>
        <div className={styles.order__container}>
          <div className={styles.form__item}>
            <span className={styles.label}>your address</span>
            <textarea
              className={styles.input}
              id=''
              name=''
              cols='30'
              rows='10'
              placeholder='enter your address'
            ></textarea>
          </div>
          <div className={styles.form__item}>
            <span className={styles.label}>your message</span>
            <textarea
              className={styles.input}
              id=''
              name=''
              cols='30'
              rows='10'
              placeholder='enter your message'
            ></textarea>
          </div>
        </div>
        <input
          type='submit'
          value='order now'
          className={classNames('button', styles.button)}
        />
      </form>
    </section>
  )
}

export default Order
