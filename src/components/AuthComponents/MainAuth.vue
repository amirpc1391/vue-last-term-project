<script setup>

import Btn from "@/components/Btn.vue";
import InputGroup from "@/components/InputGroup.vue";
import router from "@/router/index.js";
</script>

<template>


  <div class="panel">
    <h1 class="panel__title">ورود / ثبت نام</h1>
    <input-group title="لطفا شماره تلفن همراه خود را وارد کنید." placeholder="۰۹۱۵۱۲۳۴۵۶۷" typeOfInput="text"
                 variant="secondary"></input-group>
    <btn @clickBtn="()=>router.push('/auth/signup')" variant="secondary">ادامه</btn>
  </div>
</template>

<style scoped>

</style>