<script setup>
defineProps({
  type: {
    type: String,
    required: true,
  },
  isActiveNotification: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>

  <div :class="{'notification-section':true, 'notification-section--active':isActiveNotification}">
    <div :class="`notification-section__content notification-section__content--${type}`">
      <img class="notification-section__img-icon" :src="`src/assets/images/${type}.png`" :alt="type">
      <p class="notification-section__description">
        <slot></slot>
      </p>
      <a href="#" class="notification-section__close flex-center">
        <img class="notification-section__close-img" src="@/assets/images/close.png" alt="close">
      </a>
    </div>
  </div>
</template>

<style scoped>
.notification-section {
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  margin: 0 auto;
  visibility: hidden;
  opacity: 0;
  transition: all .2s ease-in-out;
  padding: .6rem;
  z-index: 999;
}

.notification-section--active {
  visibility: visible;
  opacity: 1;
}

.notification-section__content {
  width: 100%;
  color: var(--color_dee2e6);
  border-radius: 8px;
  padding: 1rem;
  line-height: 1.4;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
}

.notification-section__img-icon {
  width: 1.5rem;
}

.notification-section__title {
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
}

.notification-section__description {
  font-size: .8rem;
  flex-grow: 1;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.notification-section__content--notice {
  background-color: #1791ba;
  box-shadow: 0px 10px 20px 0px #0d556e;
}

.notification-section__content--success {
  background-color: green;
  box-shadow: 0px 10px 20px 0px #005900;
}

.notification-section__content--danger {
  background-color: #c23c2f;
  box-shadow: 0px 10px 20px 0px #CC24144D;
}
</style>