<script setup>

import FooterWeb from "@/components/FooterWeb.vue";
import HeaderWeb from "@/components/HeaderWeb.vue";
import Slider from "@/components/HomeComponents/Slider.vue";
import Blog from "@/components/HomeComponents/Blog.vue";
import { reactive } from "vue";

const sliderPosts = reactive( [

  {
    title : 'کنترل کننده زیردریایی طراحی شده در دانشگاه صنعتی شریف در بین ۱۰ زیردریایی برتر جهان قرار گرفت.' ,
    category : 'تکنولوژی' ,
    time : 7 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/slider1.jpg" ,
    user : {
      name : "محمد سبجان سجایی فر" ,
      img : "src/assets/images/slider1-user.jpg"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  } ,
  {
    title : 'طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران' ,
    category : 'تکنولوژی' ,
    time : 10 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/blog2.jpg" ,
    user : {
      name : "محمد سبجان سجایی فر" ,
      img : "src/assets/images/blog1-user.png"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  } ,
  {
    title : 'طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران' ,
    category : 'تکنولوژی' ,
    time : 5 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/blog3.jpg" ,
    user : {
      name : "محمد سبجان سجایی فر" ,
      img : "src/assets/images/blog1-user.png"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  }

] )
const verticalPosts = reactive( [

  {
    title : 'طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران' ,
    category : 'تکنولوژی' ,
    time : 7 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/blog1.jpg" ,
    user : {
      name : "محمد سبجان سجایی فر" ,
      img : "src/assets/images/blog1-user.png"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  } ,
  {
    title : 'طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران' ,
    category : 'تکنولوژی' ,
    time : 5 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/blog3.jpg" ,
    user : {
      name : "محمدرضا علیزاده" ,
      img : "src/assets/images/user-2.jpg"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  } ,
  {
    title : 'طراحی کنترل کننده زیردریایی نظامی در دانشگاه صنعتی شریف تهران' ,
    category : 'تکنولوژی' ,
    time : 10 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/blog2.jpg" ,
    user : {
      name : "عاطفه مجتبی نژاد" ,
      img : "src/assets/images/user-3.jpg"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  }

] )

const horizontalPosts = reactive( [

  {
    title : 'اسنپدراگون ۸ نسل یک پلاس احتمالاً ۲۰ درصد سریع‌تر از نسل قبلی این تراشه خواهد بود' ,
    category : 'تکنولوژی' ,
    time : 7 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/post1.jpg" ,
    user : {
      name : "محمد سبجان سجایی فر" ,
      img : "src/assets/images/user-4.png"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  } ,
  {
    title : 'فیرش یتعنص هاگشناد نایوجشناد طسوت هدش یحارط ییایردریز هدننک لرتنک .تفرگ رارق ناهج رترب ییایردریز ۱۰ نیب رد ناریا یمالسا یروهمج شترا یارب',
    category : 'تکنولوژی' ,
    time : 10 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/post2.jpg" ,
    user : {
      name : "محمد سبجان سجایی فر" ,
      img : "src/assets/images/user-5.png"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  } ,
  {
    title : 'گزارش مالی جدید ال‌جی از رکورد بی‌سابقه خرید و فروش این شرکت در سه‌ماهه نخست سال ۲۰۲۲ خبر می‌دهد' ,
    category : 'تکنولوژی' ,
    time : 5 ,
    description : "کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت." ,
    img : "src/assets/images/post3.jpg" ,
    user : {
      name : "محمد سبجان سجایی فر" ,
      img : "src/assets/images/user-6.png"
    } ,
    date : '۲۸ تير ۱۴۰۰'
  }

] )

</script>

<template>
  <header-web isActiveLeftSection></header-web>

  <main class="main">
    <Slider :posts="sliderPosts"/>
    <div class="container">
      <div class="blog-vertical-section">
        <Blog
            v-for="post in verticalPosts"
            :title="post.title"
            :category="post.category"
            :time="post.time"
            :description="post.description"
            :date="post.date"
            :img="post.img"
            :user="post.user"
            is-vertical
        />
      </div>
      <div class="blog-horizontal-section">
        <Blog
            v-for="post in horizontalPosts"
            :title="post.title"
            :category="post.category"
            :time="post.time"
            :description="post.description"
            :date="post.date"
            :img="post.img"
            :user="post.user"
        />
      </div>
    </div>
  </main>
  <footer-web></footer-web>
</template>

<style scoped>
.blog-vertical-section {
  display: flex;
  justify-content: space-between;
  margin: 45px 0;
}

.blog-horizontal-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 45px 0;
  gap: 45px;
}
</style>