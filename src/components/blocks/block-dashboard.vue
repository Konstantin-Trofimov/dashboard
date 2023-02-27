<template>
 <div class="dashboard">
  <div class="dashboard-heading">
   <h1>Dashboard</h1>
   <element-controls />
  </div>

  <table>
   <thead>
    <tr>
     <th>
      <element-pagination />
      Data
     </th>
     <th
      v-for=" i in 5"
      :key="i">
      Summary{{ i }}
     </th>
    </tr>
   </thead>

   <tbody>
    <transition-group name="table-row">
     <element-row
      v-for="{ id, ...item } in insertData"
      :key="id"
      :data="item">
     </element-row>
    </transition-group>

    <element-search @search="onSearch" /> 
   </tbody>
  </table>
 </div>
</template>

<script>
import ElementControls from '@/components/elements/element-controls.vue'
import ElementPagination from '@/components/elements/element-pagination.vue'
import ElementRow from '@/components/elements/element-row.vue'
import ElementSearch from '@/components/elements/element-search.vue'

export default {
 name: 'block-dashboard',
 components: {
  ElementControls,
  ElementPagination,
  ElementRow,
  ElementSearch
 },
 props: {
  ips: {
   type: Array,
   required: true,
   default: () => []
  },
 },
 data() {
  return {
   rowLimit: 4
  }
 },
 methods: {
  onSearch(query) {
   this.$emit('search', query)
  },
 },
 computed: {
  insertData() {
   return this.ips.filter((_, i) => i < this.rowLimit) //insert data to template 
  },
 }
}
</script>

<style>
.dashboard {
 padding: 12px 0 64px;
}

.dashboard-heading {
 display: flex;
 align-items: center;
 justify-content: space-between;
}

h1 {
 font-family: var(--ff-quicksand);
 font-weight: 500;
 font-size: 34px;
 line-height: 42px;
 letter-spacing: 0.25px;
 color: var(--c-dark);
}

table {
 margin-top: 31px;
 min-height: 324px;
 
}

thead tr,
tbody tr {
 display: grid;
 grid-template-columns: minmax(118px, 330px) 118px 118px 118px 118px 118px;
 align-items: center;
 justify-items: flex-end;
}

thead tr {
 border-bottom: 2px solid var(--c-gray-30);
}

tbody tr:not(tbody tr:nth-last-child(-n+2)) {
 border-bottom: 1px solid var(--c-gray-30);
}

thead tr {
 grid-template-rows: 48px;
}

tbody tr {
 grid-template-rows: 64px;
}

thead tr th:nth-child(1),
tbody tr td:nth-child(1) {
 justify-self: flex-start;
}

thead tr th:nth-child(1) {
 justify-self: flex-start;
 position: relative;
 padding-left: 24px;
}

tbody tr td:nth-child(1) {
 color: var(--c-dark);
 text-transform: capitalize;
}

tbody tr td {
 font-weight: 500;
 font-size: 1.25rem;
}

thead tr th {
 font-family: var(--ff-quicksand);
 font-weight: 500;
 font-size: 1rem;
 letter-spacing: 0.0275rem;
 color: var(--c-gray-60);
}

.table-row-enter-active,
.table-row-leave-active {
 opacity: 0;
 transition: all .5s ease-in-out;
}

.table-row-enter-from,
.table-row-leave-to {
 transform: translateY(60px);
}

.table-row-move {
 transition: transform .5s ease;
}

.search {
 grid-template-rows: 32px !important;
 position: absolute; 
 bottom: -32px;
}

.search td {
 height: 100%;
}

.search td:nth-child(1) {
 justify-self: flex-start;
}

.search td input {
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

.search td input::placeholder {
 color: var(--c-dark);
}

.search td:nth-child(1), .search td:nth-child(1) input {
 width: 100%;
}

</style>