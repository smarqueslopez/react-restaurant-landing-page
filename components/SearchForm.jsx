import styles from '@/styles/components/SearchForm.module.scss'
import classNames from 'classnames'

function SearchForm({ active, onClose }) {
  return (
    <form
      action=''
      className={classNames(styles.form, { [styles['active-search']]: active })}
      id='search-form'
    >
      <input
        className={styles['form__search-box']}
        type='search'
        placeholder='Search here...'
        name=''
        id='search-box'
      />
      <span
        className={classNames('fas fa-search', styles['form__search-icon'])}
      ></span>
      <span
        className={classNames('fas fa-times', styles['form__close-icon'])}
        onClick={onClose}
      ></span>
    </form>
  )
}

export default SearchForm
