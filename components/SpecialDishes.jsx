import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SpecialDish from './SpecialDish'
import specialDishes from '@/utils/specialDishes'
import styles from '@/styles/components/SpecialDishes.module.scss'

function SpecialDishes() {
  return (
    <section className={styles.home} id='home'>
      <Swiper
        key='home-swiper'
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
        {specialDishes.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SpecialDish {...item} />
            </SwiperSlide>
          )
        })}
        <div className='swiper-pagination' />
      </Swiper>
    </section>
  )
}

export default SpecialDishes
