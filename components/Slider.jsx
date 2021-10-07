import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import styles from '@/styles/components/Slider.module.scss'
import Slide from './Slide'
import classNames from 'classnames'

function Slider({ items }) {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false
      }}
      pagination={{
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
      }}
      loop={true}
      wrapperClass='swiper-wrapper'
    >
      <div className={classNames('swiper-container', styles.slider__container)}>
        <div className={classNames('swiper-wrapper', styles.slider__wrapper)}>
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide {...item} />
              </SwiperSlide>
            )
          })}
        </div>
      </div>
      <div className='swiper-pagination' />
    </Swiper>
  )
}

export default Slider
