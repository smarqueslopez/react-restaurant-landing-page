import classNames from 'classnames'
import { useEffect, useState } from 'react'
import menuItems from '@/utils/menuItems'
import styles from '@/styles/components/Header.module.scss'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      const menuIcon = document.querySelector('#menu-bars')
      menuIcon.classList.add('fa-bars')
      menuIcon.classList.remove('fa-times')
      setToggleMenu(false)
    }
  }, [])

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    const menuIcon = document.querySelector('#menu-bars')
    menuIcon.classList.toggle('fa-bars', toggleMenu)
    menuIcon.classList.toggle('fa-times', !toggleMenu)
  }

  return (
    <header className={styles.header}>
      <a href='#' className={styles.header__logo}>
        <span className='fas fa-utensils' />
        resto.
      </a>
      <nav
        id='nav'
        className={classNames(styles.header__nav, {
          [styles['show-menu']]: toggleMenu
        })}
      >
        {menuItems.map((item) => {
          return (
            <a
              key={item.id}
              href={item.href}
              className={classNames(styles['header__nav-link'], {
                [styles['active-link']]: item.active
              })}
              onClick={onMenuClick}
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
