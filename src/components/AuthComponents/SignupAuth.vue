<script setup>

import Btn from "@/components/Btn.vue";
import InputGroup from "@/components/InputGroup.vue";
import router from "@/router/index.js";
</script>

<template>

  <div class="panel">
    <h1 class="panel__title">شما هنوز در هلیوم ثبت نام نکردید</h1>
    <p class="panel__sub-title">لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</p>
    <input-group title="شماره تلفن همراه شما" placeholder="۰۹۱۵۱۲۳۴۵۶۷" typeOfInput="text"
                 variant="secondary"></input-group>
    <!--    <input-group title="*نام و نام خانوادگی" placeholder="نام خود را به فارسی وارد کنید" type="text"-->
    <!--                 variant="phone"></input-group>-->
    <input-group title="*پست الکترونیکی" placeholder="example@helium.com" typeOfInput="text"
                 variant="secondary"></input-group>
    <input-group title="رمز عبور" placeholder="رمز عبور خود را وارد کنید" typeOfInput="password"
                 variant="primary"></input-group>
    <btn variant="secondary" @clickBtn="()=>router.push('/')">ادامه</btn>
  </div>
</template>

<style scoped>
.panel {
  gap: 30px;
  margin: 10px;
}
</style>