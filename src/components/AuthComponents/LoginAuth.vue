<script setup>
import Btn from "@/components/Btn.vue";
import InputGroup from "@/components/InputGroup.vue";
import router from "@/router/index.js";
import { useAuthStore } from "@/stores/auth.js";
import { onMounted } from "vue";
import { useNotificationStore } from "@/stores/notification.js";

const notification = useNotificationStore()
const auth = useAuthStore()

onMounted( () =>
{

  if ( !auth.checkPhoneExists() )
  {
    auth.reset()
    router.push( '/auth' )
    return;
  }

  if ( auth.phone.length === 0 )
  {

    notification.showNotification(
        'danger' ,
        'شماره تماس نمیتواند خالی باشد.'
    )
    return;

  }

  if ( !auth.validationPhone() )
  {

    notification.showNotification(
        'danger' ,
        'فرمت شماره تماس اشتباه است.'
    )
    return;

  }

  if ( !auth.checkPhoneExists() )
  {

    router.push( '/auth' )

  }

} )

const submit = () =>
{

  let password = auth.users[ auth.phone ]

  if ( password === auth.password )
  {

    notification.showNotification(
        'success' ,
        'ورود با موفقیت انجام شد.'
    )
    auth.isAuth = true
    setTimeout( () =>
    {
      router.push( '/' )
    } , 2100 )

  } else
  {

    notification.showNotification(
        'danger' ,
        'رمز عبور اشتباه می باشد.'
    )

  }

}

</script>

<template>
  <div class="panel">
    <h1 class="panel__title">ورود</h1>
    <input-group
        v-model="auth.password"
        title="رمز عبور"
        placeholder="رمز عبور خود را وارد کنید"
        typeOfInput="password"
        variant="primary"/>
    <btn @clickBtn="submit" variant="secondary">ورود</btn>
  </div>
</template>

<style scoped>

</style>