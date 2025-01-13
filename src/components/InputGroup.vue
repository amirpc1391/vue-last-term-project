<script setup>

defineProps( {
  title : {
    type : String ,
  } ,
  placeholder : {
    type : String
  } ,
  typeOfInput : {
    type : String ,
    default : 'text'
  } ,
  variant : {
    type : String ,
    default : 'primary'
  } ,
} )

const model = defineModel()
</script>

<template>
  <div class="input-group">
    <label class="input-group__label">{{ title }}</label>
    <input :class="['input-group__input',`input-group__input--${variant}`]"
           :type="typeOfInput"
           :placeholder="placeholder"
           v-model="model"
    />
    <div v-if="!model.length" class="input-group__placeholder">مثال</div>
  </div>
</template>

<style scoped>
.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
}

.input-group__label {
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_243447);

}

.input-group__input {
  width: 100%;
  outline: none;
  border: none;
  padding: 7px 16px 7px 16px;
  gap: 10px;
  border-radius: 2px;
  box-shadow: 0 2px 0 0 #406080;
  background-color: transparent;
}

.input-group__input::placeholder {
  color: var(--color_8593A6);
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.input-group__placeholder {
  display: none;
  position: absolute;
  bottom: 4px;
  right: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: var(--color_8593A6);
}

.input-group__input--secondary {
  direction: ltr;
}

.input-group__input--secondary + .input-group__placeholder {
  display: block;
}
</style>