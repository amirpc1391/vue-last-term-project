<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';
import {Navigation} from 'swiper/modules';
</script>

<template>
  <div class="slider">
    <swiper :pagination="true" :navigation="true" :modules="[Pagination, Navigation]" class="mySwiper">
      <swiper-slide>
        <img class="slider__img" src="@/assets/images/slider1.jpg" alt="slider1">
        <div class="slider__box">
          <div class="slider__user-section">
            <img class="slider__user-img" src="@/assets/images/blog1-user.png" alt="">
            <div class="slider__user-info">
              <h4 class="slider__user-title">محمد سبجان سجایی فر</h4>
              <p class="slider__user-sub-title">۲۸ تير ۱۴۰۰</p>
            </div>
          </div>
          <h3 class="slider__title">طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران</h3>
          <p class="slider__description">کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰
            زیردریایی
            برتر جهان قرار گرفت.</p>
          <div class="slider__section">
            <p class="slider__time">۷ دقیقه مطالعه</p>
            <div class="slider__dot"></div>
            <p class="slider__technology">تکنولوژی</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img class="slider__img" src="@/assets/images/slider1.jpg" alt="slider1">
        <div class="slider__box">
          <div class="slider__user-section">
            <img class="slider__user-img" src="@/assets/images/blog1-user.png" alt="">
            <div class="slider__user-info">
              <h4 class="slider__user-title">محمد سبجان سجایی فر</h4>
              <p class="slider__user-sub-title">۲۸ تير ۱۴۰۰</p>
            </div>
          </div>
          <h3 class="slider__title">طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران</h3>
          <p class="slider__description">کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰
            زیردریایی
            برتر جهان قرار گرفت.</p>
          <div class="slider__section">
            <p class="slider__time">۷ دقیقه مطالعه</p>
            <div class="slider__dot"></div>
            <p class="slider__technology">تکنولوژی</p>
          </div>
        </div>
      </swiper-slide>

    </swiper>

  </div>
</template>

<style>
.slider {
  width: 100%;
  height: 100%;
  background-color: #000;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: var(--color_white);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.swiper-pagination-bullet-active {
  background-color: var(--color_white) !important;
}

.swiper-button-next, .swiper-button-prev {
  color: var(--color_white);
}

.slider__box {
  position: absolute;
  color: var(--color_white);
  bottom: 60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  padding: 32px;
  border-radius: 12px;
  backdrop-filter: blur(50px);
  box-shadow: 4px 10px 35px 0 #0000004D;
  border: 1px solid #FFFFFF1A;
  background-color: #00000033;
}

.slider__img {
  display: block;
  width: 100%;
  height: 800px;
  object-fit: cover;
}

.slider__user-section {
  display: flex;
  gap: 12px;
  align-items: center;
}

.slider__user-img {
  width: 36px;
  height: 36px;
  border-radius: 100px;

}

.slider__user-info {

}

.slider__user-title {
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.slider__user-sub-title {
  font-size: 11px;
  font-weight: 600;
  line-height: 18.7px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_CCCCCC);

}

.slider__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

}

.slider__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_CCCCCC);

}

.slider__section {
  display: flex;
  gap: 8px;
  align-items: center;
}

.slider__time {
  font-size: 11px;
  font-weight: 600;
  line-height: 18.7px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_CCCCCC);

}

.slider__dot {
  width: 3px;
  height: 3px;
  background-color: var(--color_CCCCCC);
  border-radius: 100px;
}

.slider__technology {
  padding: 2px 8px 3px 8px;
  gap: 10px;
  border-radius: 4px;
  background-color: var(--color_DEEAF5);
  color: var(--color_208BEE);
  font-size: 11px;
  font-weight: 600;
  line-height: 18.7px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
</style>
