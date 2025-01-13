<script setup>

import Btn from "@/components/Btn.vue";
import InputGroup from "@/components/InputGroup.vue";
import router from "@/router/index.js";
import {useAuthStore} from "@/stores/auth.js";
import {useNotificationStore} from "@/stores/notification.js";
import {onMounted} from "vue";

const auth = useAuthStore()
const notification = useNotificationStore()

onMounted(() => {
  auth.password = ''
  auth.fullName = ''
})

const submit = () => {

  if (auth.phone.length === 0 || auth.password.length === 0 || auth.fullName.length === 0) {

    notification.showNotification(
        'danger',
        'شماره تماس ،نام و نام خانوادگی یا رمز عبور نمیتواند خالی باشد.'
    )
    return false;

  }
  if ( !auth.validationPhone() )
  {

    notification.showNotification(
        'danger' ,
        'فرمت شماره تماس اشتباه است.'
    )
    return false;

  }
  if (auth.checkPhoneExists()) {

    notification.showNotification(
        'danger',
        'با این شماره تماس قبلا یک نفر دیگه ثبت نام کرده است.'
    )
    return false;

  }

  auth.addNewUser()
  auth.reset()
  router.push('/auth')

}

</script>

<template>

  <div class="panel">

    <h1 class="panel__title">شما هنوز در هلیوم ثبت نام نکردید</h1>
    <p class="panel__sub-title">لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</p>

    <input-group
        title="شماره تلفن همراه شما"
        placeholder="۰۹۱۵۱۲۳۴۵۶۷"
        typeOfInput="text"
        variant="secondary"
        v-model="auth.phone"
    />

    <input-group
        title="*نام و نام خانوادگی"
        placeholder="نام خود را به فارسی وارد کنید"
        type="text"
        variant="phone"
        v-model="auth.fullName"
    />

    <input-group
        title="رمز عبور"
        placeholder="رمز عبور خود را وارد کنید"
        typeOfInput="password"
        variant="primary"
        v-model="auth.password"
    />

    <btn variant="secondary" @clickBtn="submit">ادامه</btn>

  </div>
</template>

<style scoped>
.panel {
  gap: 30px;
  margin: 10px;
}
</style>