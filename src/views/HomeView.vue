<script setup>

import FooterWeb from "@/components/FooterWeb.vue";
import HeaderWeb from "@/components/HeaderWeb.vue";
import Slider from "@/components/HomeComponents/Slider.vue";
import Blog from "@/components/HomeComponents/Blog.vue";
</script>

<template>
  <header-web isActiveLeftSection></header-web>
  <main class="main">
    <div class="container">
      <div class="blog-vertical-section">
        <Blog is-vertical></Blog>
        <Blog is-vertical></Blog>
        <Blog is-vertical></Blog>
      </div>
      <div class="blog-horizontal-section">
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
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