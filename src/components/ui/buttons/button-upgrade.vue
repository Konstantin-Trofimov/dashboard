<template>
 <button class="btn-upgrade">upgrade</button>
</template>

<script>
export default {
 name: 'button-upgrade',
}
</script>

<style>
.btn-upgrade {
 padding: 8px 9px;
 background: var(--c-white);
 font-size: .875rem;
 font-weight: 700;
 text-transform: uppercase;
 color: var(--c-blue-base);
 background: var(--c-white);
 box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16), 0px 2px 4px rgba(54, 123, 245, 0.24);
 border-radius: 10px;
 transition: all ease-in-out .6s;
}

.btn-upgrade:hover {
 box-shadow: 0px 4px 8px rgba(54, 123, 245, 1), 0px 2px 4px rgba(54, 123, 245, 0.24);
}
</style>