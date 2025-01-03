<script setup>

import FooterWeb from "@/components/FooterWeb.vue";
import HeaderWeb from "@/components/HeaderWeb.vue";
import MainAuth from "@/components/AuthComponents/MainAuth.vue";
import SignupAuth from "@/components/AuthComponents/SignupAuth.vue";
import LoginAuth from "@/components/AuthComponents/LoginAuth.vue";
</script>

<template>
  <header-web :isActiveLeftSection="false"></header-web>
  <main class="main">
      <SignupAuth></SignupAuth>
  </main>
  <footer-web></footer-web>
</template>

<style scoped>


</style>