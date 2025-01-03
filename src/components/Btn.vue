<script setup>
defineProps({
  variant: {
    type: String,
    default: 'bg-blue-500'
  }
})
</script>

<template>
  <button :class="['button-group',{[`button-group--variant-${variant}`]:true}]">
    <slot></slot>
  </button>
</template>

<style scoped>

.button-group{
  padding: 8px 24px;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 23.8px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.button-group--variant-primary {

  background-color: transparent;
  border: 2px solid #24344726;
  color: #208BEE;

}
.button-group--variant-secondary{
  background-color: #208BEE;
  border: none;
  color: white;
  box-shadow: 0px 8px 16px 0px #20304026;
  padding: 11px 75px;
}
</style>