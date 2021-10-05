import classNames from 'classnames'
import { useState } from 'react'
import menuItems from '@/utils/menuItems'
import styles from '@/styles/components/Header.module.scss'

function Header() {
  const [toggle, setToggle] = useState(false)

  const onMenuClick = (e) => {
    setToggle(!toggle)
    const menuIcon = document.querySelector('#menu-bars')
    menuIcon.classList.toggle('fa-bars', toggle)
    menuIcon.classList.toggle('fa-times', !toggle)
  }

  return (
    <header className={styles.header}>
      <a href='#' className={styles.header__logo}>
        <span className='fas fa-utensils'></span>resto.
      </a>
      <nav
        className={classNames(styles.header__nav, {
          [styles['show-menu']]: toggle
        })}
      >
        {menuItems.map((item) => {
          return (
            <a
              key={item.id}
              href={item.href}
              className={classNames(
                styles['header__nav-link'],
                {
                  [styles['active-link']]: item.active
                }
              )}
            >
              {item.name}
            </a>
          )
        })}
      </nav>
      <div className={styles.header__icons}>
        <span
          id='menu-bars'
          className={classNames('fas fa-bars', styles.menu)}
          onClick={onMenuClick}
        />
        <span
          id='search-icon'
          className={classNames('fas fa-search', styles.search)}
        />
        <span className='fas fa-heart' />
        <span className='fas fa-shopping-cart' />
      </div>
    </header>
  )
}

export default Header
