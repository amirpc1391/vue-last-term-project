<script setup>

import FooterWeb from "@/components/FooterWeb.vue";
import HeaderWeb from "@/components/HeaderWeb.vue";
import Notification from "@/components/Notification.vue";
import {ref} from "vue";

const isActiveNotification = ref(true)
</script>

<template>
  <header-web :isActiveLeftSection="false"></header-web>
  <main class="main">
      <RouterView></RouterView>
  </main>
  <footer-web></footer-web>
  <Notification type="success" :is-active-notification="isActiveNotification">
    در حال حاضر ارتباط با سرور قطع می‌باشد. لطفا بعدا مجدد تلاش کنید.
  </Notification>
</template>

<style scoped>


</style>