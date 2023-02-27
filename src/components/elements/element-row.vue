<template>
 <tr>
  <td
   v-for="(val, _, i) in data"
   :key="i">{{ val }}</td>
 </tr>
</template>

<script>
export default {
 name: 'element-row',
 props: {
  data: {
   type: Object
  }
 }
}
</script>
