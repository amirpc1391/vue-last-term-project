<script setup>

import Btn from "@/components/Btn.vue";
import InputGroup from "@/components/InputGroup.vue";
import router from "@/router/index.js";
import { useNotificationStore } from "@/stores/notification.js";
import { useAuthStore } from "@/stores/auth.js";
import { onMounted } from "vue";

const notification = useNotificationStore()
const auth = useAuthStore()


onMounted( () =>
{

  // if ( auth.isAuth )
  // {
  //   router.push( '/' )
  //   return
  // }

  auth.reset()

} )

const submit = () =>
{

  if ( auth.phone.length === 0 )
  {

    notification.showNotification(
        'danger' ,
        'شماره تماس نمیتواند خالی باشد.'
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

  if ( !auth.checkPhoneExists() )
  {

    router.push( 'auth/signup' )
    return false;

  }

  router.push( 'auth/login' )

}

</script>

<template>
  <div class="panel">
    <h1 class="panel__title">ورود / ثبت نام</h1>
    <input-group title="لطفا شماره تلفن همراه خود را وارد کنید." placeholder="۰۹۱۵۱۲۳۴۵۶۷" typeOfInput="text"
                 variant="secondary" v-model="auth.phone"></input-group>
    <btn @clickBtn="submit" variant="secondary">ادامه</btn>
  </div>
</template>

<style scoped>

</style>