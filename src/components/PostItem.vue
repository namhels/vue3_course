<template>
	<div class="post">
		<div>
			<div>{{ post.id }}</div>
			<div><strong>Name:</strong>{{ post.title }}</div>
			<div><strong>Discription:</strong>{{ post.body }}</div>
		</div>
		<div class="post__buttons">
			<MyButton @click="$router.push(`/posts/${post.id}`)" class="btn">Open</MyButton>
			<MyButton @click="$emit('remove', post)" class="btn">Delete</MyButton>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	}
}
</script>

<style scoped>
.post {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 15px;
	padding: 15px;
	border: 2px solid turquoise;
	border-radius: 10px;
}
.post__buttons {
	display: flex;
}
.btn {
	margin-left: 12px;
}
</style>