<script setup>
defineProps( {
  isVertical : {
    type : Boolean ,
    default : false
  } ,
  img : {
    type : String ,
    required : true
  } ,
  user : {
    type : Object ,
    required : true ,
    default : {
      img : "" ,
      name : ""
    }
  } ,
  date : {
    type : String ,
    required : true
  } ,
  title : {
    type : String ,
    required : true
  } ,
  description : {
    type : String ,
    required : true
  } ,
  time : {
    type : Number ,
    required : true ,
    default : 7
  } ,
  category : {
    type : String ,
    required : true
  }
} )
</script>

<template>
  <div class="blog" :class="{'blog--horizontal':!isVertical}">
    <div v-if="!isVertical" class="blog__section-right">
      <img class="blog__right-img" :src="img" alt="">
    </div>
    <div class="blog__section-left">
      <div class="blog__user-section">
        <img class="blog__user-img" :src="user.img" alt="">
        <div class="blog__user-info">
          <h4 class="blog__user-title">{{ user.name }}</h4>
          <p class="blog__user-sub-title">{{ date }}</p>
        </div>
      </div>
      <img v-if="isVertical" class="blog__left-img" :src="img" alt="">
      <h3 class="blog__title">{{ title }}</h3>
      <p class="blog__description">{{ description }}</p>
      <div class="blog__section">
        <p class="blog__time">{{ time }} دقیقه مطالعه</p>
        <div class="blog__dot"></div>
        <p class="blog__technology">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog {
  display: flex;
  max-width: 374px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.blog--horizontal {
  max-width: 100%;
  width: 100%;
}

.blog__section-right {

}

.blog__right-img {
  border-radius: 5px;
  width: 586px;
  height: 387px;
}

.blog__section-left {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.blog__user-section {
  display: flex;
  gap: 12px;
  align-items: center;
}

.blog__user-img {
  width: 36px;
  height: 36px;
  border-radius: 100px;

}

.blog__user-info {

}

.blog__user-title {
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_28394F);

}

.blog__user-sub-title {
  font-size: 11px;
  font-weight: 600;
  line-height: 18.7px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_8593A6);

}

.blog__left-img {
  width: 374px;
  height: 247px;
  border-radius: 4px;
}

.blog__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_243447);

}

.blog__description {
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_445161);

}

.blog__section {
  display: flex;
  gap: 8px;
  align-items: center;
}

.blog__time {
  font-size: 11px;
  font-weight: 600;
  line-height: 18.7px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_8593A6);

}

.blog__dot {
  width: 3px;
  height: 3px;
  background-color: var(--color_8593A6);
  border-radius: 100px;
}

.blog__technology {
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