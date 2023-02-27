<template>
 <div class="element-user">
  <img :src="user">
 </div>
</template>

<script>
import user from "@/assets/icons/user.png";

export default {
 name: 'element-user',
 data() {
  return {
   user
  }
 }
}
</script>

<style>
.element-user {
 border-radius: 100%;
 background: var(--c-gray-60)
}

.element-user img {
 border-radius: 100%;
 width: 100%;
 height: 100%;
 object-fit: contain;
}

</style>