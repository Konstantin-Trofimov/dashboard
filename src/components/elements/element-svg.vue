<template>
 <component class="icon" :is="dynamicComponent" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
 name: 'element-svg',
 props: {
  icon: {
   type: String,
   required: true,
  },
 },
 computed: {
  dynamicComponent() {
   const name = this.icon;
   return defineAsyncComponent(() => import(`@/components/ui/icons/icon-${name}.vue`));
  },
 },
};
</script>

