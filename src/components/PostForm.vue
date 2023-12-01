<template>
	<form @submit.prevent class="form">
		<h4>Post create</h4>
		<MyInput v-model="post.title" placeholder="Name" />
		<MyInput v-model="post.body" placeholder="Description" />
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

.btn {
	align-self: flex-end;
	margin-top: 15px;
}
</style>