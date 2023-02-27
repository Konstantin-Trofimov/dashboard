<template>
 <div class="analyze">
  <div class="container">
   <div class="analyze-wrap">
    <BlockSidebar @sort="onSort" />
    
    <BlockDashboard @search="onSearch" :ips="searchData" />
   </div>
  </div>
 </div>
</template>

<script>
import BlockSidebar from '@/components/blocks/block-sidebar.vue'
import BlockDashboard from '@/components/blocks/block-dashboard.vue'

import json from '@/assets/json/ips.json'

import { sortingData } from '@/utils/sorting.js'
import { filterData } from '@/utils/filter.js'

export default {
 name: 'view-analyze',
 components: {
  BlockSidebar,
  BlockDashboard
 },
 data() {
  return {
   ips: json, // data from server
   sortedBy: 'all',
   searchedData: {},
  }
 },
 methods: {
  onSort(command) {
   this.sortedBy = command
  },
  onSearch(query) { 
   this.searchedData = query
  },
 },
 computed: {
  sortedData() {
   let data = [...this.ips]
  
   switch (this.sortedBy) {
    case 'odd': data = sortingData(this.ips)
     break
    case 'even': data = sortingData(this.ips, 1)
     break
    case 'all': data
     break
   }

   return data // sorted by (even, odd, all)
  },
  searchData() {   
    return Object.keys(this.searchedData).length ? [...this.sortedData].filter(filterData(this.searchedData)) : this.sortedData 
    // search data on input fields    
  }
 },
}
</script>

<style>
.analyze {
 height: 100%;
}

.analyze-wrap {
 height: 100%;
 display: grid;
 grid-template-columns: 260px auto;
 gap: 4.75rem;
}
</style>