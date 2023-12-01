<template>
	<div class="post" v-for="post in posts">
		<div><strong>Name:</strong>{{ post.title }}</div>
		<div><strong>Discription:</strong>{{ post.body }}</div>
	</div>
</template>

<script>
export default {
	props: {
		posts: {
			type: Array,
			required: true,
		},
	}
}
</script>

<style scoped>
.post {
	margin-top: 15px;
	padding: 15px;
	border: 2px solid turquoise;
	border-radius: 10px;
}
</style>