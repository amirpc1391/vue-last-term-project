<script setup>

import FooterWeb from "@/components/FooterWeb.vue";
import HeaderWeb from "@/components/HeaderWeb.vue";

</script>

<template>
  <header-web :isActiveLeftSection="false"></header-web>
  <main class="main">
    <RouterView></RouterView>
  </main>
  <footer-web></footer-web>
</template>

<style scoped>


</style>