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
	background: white;
	border: 2px solid plum;
	border-radius: 5px;
	color: plum;
}
</style>