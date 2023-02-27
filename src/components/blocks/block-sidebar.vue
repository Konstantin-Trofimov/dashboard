<template>
 <div class="sidebar">
  <button-create style="margin: 0 auto;" />
  
  <div class="sidebar-btns">
   <button-sidebar
    v-for="({ command, ...options}, i) in btns"
    :key="i"
    :options="options"
    :icon="icon"
    @click="onBtnClick(i, command)"
    :class="{ active: selected === i }" />
  </div>
 </div>
</template>

<script>
export default {
 name: 'block-sidebar',
 data() {
  return {
   selected: 2,
   btns: [
    {
     caption: 'Even rows of data',
     subcaption: 'Display rows 2,4,6 etc',
     icon: 'circle',
     command: 'even'
    },
    {
     caption: 'Odd rows of data',
     subcaption: 'Display rows 1,3,5 etc',
     icon: 'check',
     command: 'odd'
    },
    {
     caption: 'All data',
     subcaption: 'Display all data',
     icon: 'print',
     command: 'all'
    }
   ]
  }
 },
 methods: {
  onBtnClick(i, command) {
   this.selected = i
   this.$emit("sort", command);
  }
 }
}
</script>

<style>
.sidebar {
 width: 260px;
 height: 100%;
 padding-top: 32px;
}

.sidebar-btns {
 margin-top: 24px;
 display: grid;
 grid-auto-flow: row;
}
</style>