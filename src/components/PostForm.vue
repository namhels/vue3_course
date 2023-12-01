<template>
	<form @submit.prevent class="form">
		<h4>Post create</h4>
		<input v-bind:value="post.title" @input="post.title = $event.target.value" class="input" type="text" placeholder="Name" />
		<input v-bind:value="post.body" @input="post.body = $event.target.value" class="input" type="text" placeholder="Description" />
		<button class="btn">Create</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: "",
				body: "",
			}
		}
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
	margin-top: 15px;
	align-self: flex-end;
	padding: 5px 20px;
	background: none;
	border: 2px solid teal;
	border-radius: 5px;
	color: teal;
}
</style>