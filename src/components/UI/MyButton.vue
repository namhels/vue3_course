<template>
	<button  class="btn">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "MyButton"
	}
</script>

<style scoped>
.btn {
	padding: 5px 20px;
	background: none;
	border: 2px solid teal;
	border-radius: 5px;
	color: teal;
}
</style>