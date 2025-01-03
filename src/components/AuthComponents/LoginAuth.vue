<script setup>

import Btn from "@/components/Btn.vue";
import InputGroup from "@/components/InputGroup.vue";
</script>

<template>
  <div class="panel">
    <h1 class="panel__title">ورود</h1>
    <input-group title="رمز عبور" placeholder="رمز عبور خود را وارد کنید" typeOfInput="password"
                 variant="primary"></input-group>
    <btn variant="secondary">ورود</btn>
  </div>
</template>

<style scoped>

</style>