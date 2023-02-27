<template>
 <div class="pagination">
  <element-svg
   icon="up"
   :class="{ active: false }" />
   
  <element-svg
   icon="down"
   :class="{ active: true }" />
 </div>
</template>

<script>
import ElementSvg from '@/components/elements/element-svg.vue'

export default {
 name: 'element-pagination',
 components: {
  ElementSvg
 }
}
</script>

<style>
.pagination {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 display: grid;
 grid-template-rows: 6px;
 grid-template-columns: 9px;
 gap: 4px;
}

.pagination svg {
 transition: all ease .5s;
 fill: var(--c-blue-gray); 
 cursor: pointer;
}


.pagination svg.active {
 fill: var(--c-teal-base) 
}
</style>