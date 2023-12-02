<template>
	<select :v-model="modelValue" @change="changeOption" class="select">
		<option disabled value="">Select from list</option>
		<option v-for="option in options" :key="option.value" :value="option.value">
			{{ option.name }}
		</option>
	</select>
</template>

<script>
export default {
	name: "MySelect",
	props: {
		modelValue: {
			type: String
		},
		options: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		changeOption(e) {
			this.$emit("update:modelValue", e.target.value)
		}
	}
}
</script>

<style scoped>
.select {
	padding: 10px 15px;
	border: 2px solid plum;
	border-radius: 5px;
	cursor: pointer;
}
</style>