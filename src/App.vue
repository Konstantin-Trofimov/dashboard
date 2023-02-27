<template>
  <header>
    <BlockHeader/>
    <BlockTabs/>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import BlockHeader from './components/blocks/block-header.vue';
import BlockTabs from '@/components/blocks/block-tabs.vue'


export default {
  components: {
    BlockHeader,
    BlockTabs
  }
}
</script>

<style scoped>

</style>
