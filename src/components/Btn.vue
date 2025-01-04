<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

</script>

<template>
  <button :class="['button-group',{[`button-group--variant-${variant}`]:true}]" @click="$emit('clickBtn')">
    <slot></slot>
  </button>
</template>

<style scoped>

.button-group {
  padding: 8px 24px;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 23.8px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
}

.button-group--variant-primary {
  background-color: transparent;
  border: 2px solid #24344726;
  color: var(--color_208BEE);
}

.button-group--variant-primary:hover {
  background-color: #eaeaea;
}

.button-group--variant-secondary {
  background-color: var(--color_208BEE);
  border: none;
  color: var(--color_white);
  box-shadow: 0px 8px 16px 0px #20304026;
  padding: 11px 75px;
}

.button-group--variant-secondary:hover {
  background-color: var(--color_176ab6);
}
</style>