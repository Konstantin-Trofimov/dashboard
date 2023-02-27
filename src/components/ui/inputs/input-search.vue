<template>
 <input
  :value="modelValue"  
  @input="updateInput" 
  :type="type">
</template>

<script>
export default {
 name: 'input-search',
 props: {
  type: {
   type: String,
   default: 'number'
  },
  modelValue: [String, Number]
 },
 methods: {
  updateInput(evt) {
   this.$emit('update:modelValue', evt.target.value)
  }
 }
}
</script>

<style scoped>
.search input {
 border: 1px solid var(--c-gray-40);
 border-radius: 10px;
 background: transparent;
 width: 86px;
 height: 100%;
 padding: 0 12px;
 font-size: .875rem;
 letter-spacing: 0.25px;
 color: var(--c-dark);
}

.search input::placeholder {
 color: var(--c-dark);
}
</style>
