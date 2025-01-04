<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__column-1">
          <img class="footer__logo" src="@/assets/images/Logo-footer.png" alt="">
          <p class="footer__title">هلیوم بستری برای اشتراک گزاری ایده ها و فکر افراد پیشرو در زمینه علم و دانش است. در
            هلیوم میتوانید به جدیدترین مقالات غلمی در کشور دسترسی داشته باشید و خود نیز در ترویج غلم و دانش نقشی داشته
            باشید.</p>
        </div>
        <div class="footer__column-2">
          <ul class="footer__link-items">
            <li class="footer__link-item"><a href="#">بنویسید</a></li>
            <li class="footer__link-item"><a href="#">راهنما</a></li>
            <li class="footer__link-item"><a href="#">معرفی به دوستان</a></li>
            <li class="footer__link-item"><a href="#">قوانین</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer {
  width: 100%;
  position: relative;
  background-color: var(--color_232F3D);
  border-radius: 10px 10px 0 0;
}

.footer:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  //width: 100%;
  //height: 100%;
  background-image: url("src/assets/images/Pattern.svg");
  background-repeat: no-repeat;
  background-position: left center;
  //background-size: cover;
  mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 52%);
  z-index: 1;
}

.footer__container {
  max-width: 1380px;
  margin: 0 auto;
  padding: 10px 20px;
}

.footer__content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  min-height: 130px;
  position: relative;
  z-index: 99;
}

.footer__column-1 {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.footer__logo {
}

.footer__title {
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_white);
}

.footer__column-2 {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer__link-items {
  width: 430px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--color_white);
}

.footer__link-item {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

</style>