<template>
	<div class="header-wrap">
		<element-logo />
		<div class="header-info">
			<button-help class="header-btn" />
			
			<button-upgrade class="header-btn" />
			<element-user />
		</div>
	</div>
</template>

<script>
import ElementLogo from '@/components/elements/element-logo.vue'
import ElementUser from '@/components/elements/element-user.vue'

export default {
	name: 'block-header',
	components: {
		ElementLogo,
		ElementUser
	}
}
</script>

<style scoped>
.header-wrap {
	background: var(--c-white);
	padding: 12px 16px;
	display: flex;
	justify-content: space-between;
	border-radius: 20px 20px 0 0;
}

.header-info {
	display: grid;
	grid-template-columns: 96px 96px 40px;
	grid-template-rows: 40px;
	gap: 1rem;
}
</style>
