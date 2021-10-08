import SearchForm from './SearchForm'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import menuItems from '@/utils/menuItems'
import styles from '@/styles/components/Header.module.scss'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)

  useEffect(() => {
    const menuIcon = document.querySelector('#menu-bars')
    const sectionList = document.querySelectorAll('section')
    const navLinkList = document.querySelectorAll('header nav a')
    window.onscroll = () => {
      menuIcon.classList.add('fa-bars')
      menuIcon.classList.remove('fa-times')
      setToggleMenu(false)
      sectionList.forEach((section) => {
        const id = section.getAttribute('id')
        const menuItem = document.querySelector(`header nav a[href="#${id}"]`)
        if (menuItem) {
          const scrollY = window.scrollY
          const sectionTop = section.offsetTop - 150
          const activeLinkClass = classNames(styles['active-link'])
          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + section.offsetHeight
          ) {
            menuItem.classList.add(activeLinkClass)
          } else {
            menuItem.classList.remove(activeLinkClass)
          }
        }
      })
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
          onClick={() => setToggleSearch(true)}
        />
        <span className='fas fa-heart' />
        <span className='fas fa-shopping-cart' />
      </div>
      <SearchForm
        active={toggleSearch}
        onClose={() => setToggleSearch(false)}
      />
    </header>
  )
}

export default Header
