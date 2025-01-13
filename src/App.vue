<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Notification from "@/components/Notification.vue";
import { useNotificationStore } from "@/stores/notification.js";

const notificationStore = useNotificationStore()

</script>

<template>
  <RouterView></RouterView>
  <Notification :type="notificationStore.type" :is-active-notification="notificationStore.isActive">
   {{notificationStore.message}}
  </Notification>
</template>

<style scoped>

</style>
