<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HeaderWeb from '@/components/HeaderWeb.vue'
import FooterWeb from '@/components/FooterWeb.vue'
import HomeView from "@/views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
</script>

<template>

<!--<home-view></home-view>-->
<!--<auth-view></auth-view>-->
<RouterView></RouterView>
</template>

<style scoped>

</style>
