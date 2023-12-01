<template>
	<input :value="modelValue" @input="updateInput" type="text" class="input"/>
</template>

<script>
	export default {
		name: "MyInput",
		props: {
			modelValue: [String, Number]
		},
		methods: {
			updateInput(e) {
				this.$emit("update:modelValue", e.target.value)
			}
		}
	}
</script>

<style scoped>
.input {
	width: 100%;
	margin-top: 15px;
	padding: 10px 15px;
	border: 2px solid plum;
	border-radius: 5px;
}
</style>