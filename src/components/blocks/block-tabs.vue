<template>
 <div class="tabs-wrap">
  <router-link class="tab" to='/dashboard'>
   <span>Analyze</span>
  </router-link>

  <router-link class="tab" to='/campaigns'>
   <span>My campaigns</span>
  </router-link>

  <router-link class="tab" to='/configure'>
   <span>Configure</span>
  </router-link>
 </div>
</template>

<script>
export default {
 name: 'bock-tabs'
}
</script>

<style scoped>
.tabs-wrap {
 position: relative;
 height: 56px;
 padding-left: 377px;
 display: flex;
 align-items: center;
 background: var(--c-white);
 border-bottom: 1px dashed var(--c-gray-30);
}

.tab {
 position: relative;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 20px;
 cursor: pointer; 
 background: var(--c-white);
 box-sizing: content-box;
 border: 1px solid transparent;
 border-bottom: 1px dashed var(--c-gray-30);
 transition: all ease .4s;
}

.tab span {
 letter-spacing: 0.0275rem;
 transition: all ease .4s;
}

.tab.router-link-active {
 border: 1px solid var(--c-gray-40);
 border-bottom: 1px solid var(--c-white);
 border-radius: 4px 4px 0px 0px;
}

.tab.router-link-active span{
 color: var(--c-dark)
}
</style>