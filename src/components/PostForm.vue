<template>
	<form @submit.prevent class="form">
		<h4>Post create</h4>
		<input v-model="post.title" class="input" type="text" placeholder="Name" />
		<input v-model="post.body" class="input" type="text" placeholder="Description" />
		<MyButton @click="createPost" class="btn">Create</MyButton>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				id: "",
				title: "",
				body: "",
			}
		}
	},
	methods: {
		createPost() {
			this.post.id = Date.now()
			this.$emit('create', this.post)
			this.post = {
				title: "",
				body: "",
			}
		},
	}
}
</script>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
}

.input {
	width: 100%;
	margin-top: 15px;
	padding: 10px 15px;
	border: 2px solid plum;
	border-radius: 5px;
}

.btn {
	align-self: flex-end;
	margin-top: 15px;
}
</style>