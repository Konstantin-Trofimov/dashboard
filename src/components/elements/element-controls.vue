<template>
 <div class="controls">
  <div class="date-select">
   <span>
    {{ datePlaceholder }}
   </span>
   <icon-triangle/>
  </div>
  <button class="controls-btn">
   <icon-print-small/>
  </button>
  <button class="controls-btn">
   <icon-download-small/>
  </button>
 </div>
</template>

<script>
export default {
 name: 'element-controls',
 data() {
  return {
   datePlaceholder: 'Aug 21, 2021 · Sep 21 2021'
  }
 }
}

</script>

<style>
 .controls {
  align-self: flex-end;
  display: grid;
  grid-template: 32px / 232px 32px 32px;
  gap: 8px
 }

 .date-select {
  width: 232px;
  height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--c-gray-40);
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
 }

 .date-select span {
  font-size: .875rem;
  letter-spacing: 0.25px;
  color: var(--c-dark);
 }

 .controls-btn {
  background: var(--c-gray-10);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
 }
</style>