<template>
 <tr class="search">
  <td>
   <input-search
    name="name"
    @input="searchData"
    placeholder="Search..."
    type="text" />
  </td>

  <td v-for="i in extraInputsLimit" :key="i">
   <input-search
    :name="'summary' + i"
    @input="searchData" />
  </td>
 </tr>
</template>

<script>
export default {
 name: 'element-search',
 data() {
  return {
   extraInputsLimit: 5,
   query: ''
  }
 },
 methods: {
  searchData(evt) {
   const newQuery = {
    field: evt.target.name,
    search: evt.target.value.toLowerCase()
   }

   this.$emit("search", newQuery);
  }
 },
}
</script >
