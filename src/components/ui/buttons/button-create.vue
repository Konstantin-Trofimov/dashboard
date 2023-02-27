<template>
 <button class="btn-create">
  <icon-plus/>
  <span>Create new</span>
 </button>
</template>

<script>
export default {
 name: 'button-create',
}
</script>

<style>
.btn-create {
 width: 213px;
 height: 56px;
 padding: 0 16px 0 24px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background: var(--c-white);
 box-shadow: 0px 16px 24px rgba(54, 123, 245, 0.16), 0px 6px 12px rgba(54, 123, 245, 0.16);
 border-radius: 99px;
 transition: all ease .6s;
}

.btn-create span {
 min-width: 141px;
 font-weight: 500;
 font-family: var(--ff-quicksand);
 letter-spacing: 0.15px;
 font-size: 20px;
 line-height: 28px;
 color: var(--c-blue-base);
 text-align: left;
}

.btn-create:hover {
 box-shadow: 0px 4px 8px rgba(54, 123, 245, 1), 0px 2px 4px rgba(54, 123, 245, 0.24);
}
</style>