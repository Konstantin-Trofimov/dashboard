<template>
 <button class="btn-sidebar">
  <element-svg :icon="options.icon" />

  <div class="descr">
   <span class="caption">
    {{ options.caption }}
   </span>

   <span class="subcaption">
    {{ options.subcaption }}
   </span>
  </div>
 </button>
</template>

<script>
import ElementSvg from '@/components/elements/element-svg.vue'

export default {
 name: 'button-sidebar',
 components: {
  ElementSvg
 },
 props: {
  options: {
   type: Object
  },
  caption: {
   type: String,
   require: true
  },
  subcaption: {
   type: String,
   require: true
  },
  icon: {
   type: String,
   require: true
  }
 }
}
</script>

<style>
.btn-sidebar {
 height: 56px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background: var(--c-blue-green);
 padding: 0 0 0 16px;
 transition: all ease .5s;
}

.btn-sidebar.active {
 background: var(--c-blue-smooth);
}

.btn-sidebar svg path {
 transition: all ease .5s;
 fill: var(--c-blue-gray); 
}

.btn-sidebar.active svg path {
 fill: var(--c-blue-base); 
}

.btn-sidebar .icon {
 position: absolute;
}

.btn-sidebar .descr {
 height: 42px;
 margin-left: 36px;
 text-align: left;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
}

.btn-sidebar .caption {
 font-family: var(--ff-quicksand);
 font-weight: 500;
 font-size: 1rem;
 color: var(--c-dark);
 letter-spacing: 0.0275rem;
 line-height: 1.5rem;
}

.btn-sidebar .subcaption {
 font-family: var(--ff-roboto);
 font-weight: 400;
 font-size: .75rem;
 color: var(--c-gray-80);
 letter-spacing: 0.025rem;
 line-height: 1rem;
}



</style>