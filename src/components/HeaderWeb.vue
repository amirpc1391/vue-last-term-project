<script setup>
import Btn from "@/components/Btn.vue";
import router from "@/router";
defineProps({
  isActiveLeftSection: {
    type: Boolean,
    default: true,
  },
})

</script>

<template>
  <header class="header">
    <div class="container">
     <div class="header__content">
       <div class="header__right-section">
         <img src="../assets/images/Logo.png" alt="">
       </div>
       <div v-if="isActiveLeftSection" class="header__left-section">
         <img class="header__search-icon" src="../assets/images/Group%20287.png" alt="">
         <btn variant="primary" @clickBtn="()=>router.push('/auth')">ورود / ثبت نام</btn>
       </div>
     </div>
    </div>

  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px #131D260D;
  backdrop-filter: blur(50px)
}
.header__content{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.header__right-section {

}

.header__left-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__left-section {

}

</style>