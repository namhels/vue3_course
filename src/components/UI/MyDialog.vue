<template>
	<div class="dialog" v-if="show" @click.stop="hideDialog">
		<div class="dialog__content" @click.stop>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MyDialog",
		props: {
			show: {
				type: Boolean,
				default: false,
			}
		},
		methods: {
			hideDialog() {
				this.$emit("update:show", false)
			}
		}
	}
</script>

<style scoped>
.dialog {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	background: rgba(0, 0, 0, 0.5);
}
.dialog__content {
	margin: auto;
	padding: 20px;
	background: wheat;
	border: 2px solid turquoise;
	border-radius: 12px;
	min-height: 50px;
	min-width: 300px;
}
</style>