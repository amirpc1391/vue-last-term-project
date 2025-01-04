<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Notification from "@/components/Notification.vue";
import {ref} from "vue";

const isActiveNotification = ref(false)
</script>

<template>
  <RouterView></RouterView>
  <Notification type="danger" :is-active-notification="isActiveNotification">
    در حال حاضر ارتباط با سرور قطع می‌باشد. لطفا بعدا مجدد تلاش کنید.
  </Notification>
</template>

<style scoped>

</style>
