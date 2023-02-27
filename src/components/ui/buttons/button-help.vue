<template>
 <button class="btn-help">
  <span>Help</span>
  <icon-question/>
 </button>
</template>

<script>
export default {
 name: 'button-help',
}
</script>

<style>
.btn-help {
 width: 96px;
 padding: 8px 9px;
 height: 40px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background: var(--c-gray-10);
 border-radius: 10px;
}

.btn-help span {
 font-weight: 400;
 font-size: 1rem;
 letter-spacing: 0.0275rem;
}
</style>