import { useEffect } from 'react'
import classNames from 'classnames'
import style from '@/styles/components/ScrollUp.module.scss'

function ScrollUp() {
  useEffect(() => {
    const scrollUp = document.getElementById('scroll-up')
    window.addEventListener('scroll', () => {
        window.scrollY >= 200
          ? scrollUp.classList.add(style['scroll-up--show'])
          : scrollUp.classList.remove(style['scroll-up--show'])
      }
    )
  }, [])

  return (
    <a href='#' className={style['scroll-up']} id='scroll-up' title={'Go up!'}>
      <i
        className={classNames('fas', 'fa-arrow-up', style['scroll-up__icon'])}
      ></i>
    </a>
  )
}

export default ScrollUp
