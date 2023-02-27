<template>
	<router-link class="logo" to='/dashboard'>
		<div class="logo-letter">
   <span>D</span>
  </div>
  <div class="logo-name">
   <span>Dashboard</span>
  </div>
	</router-link>
</template>

<script>
export default {
 name: 'element-logo'
}
</script>

<style>

.logo {
	height: 40px;
	font-family: var(--ff-racing-sans-one);
}

.logo, .logo-letter, .logo-name {
	display: flex;
	align-items: center;
}

.logo-letter, .logo-name {
	height: 100%;
}

.logo-letter {
	width: 40px;
	box-shadow: 0px 2px 6px rgba(8, 35, 48, 0.16), 0px 1px 2px rgba(8, 35, 48, 0.24);
	border-radius: 10px;
	justify-content: center;
}

.logo-name {
	margin-left: 10px;
	width: 152px;
}

.logo span {
	font-size: 1.5rem;
}

.logo-letter span {
	color: var(--c-blue-base);
}

.logo-name span {
	color: var(--c-gray-80);
} 
</style>