<template>
	<div class="app">
		<PostForm />
		<PostList v-bind:posts="posts" />
	</div>
</template>

<script>
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"

export default {
	name: "App",
	components: {
		PostForm, PostList,
	},
	data() {
		return {
			posts: [
				{ id: 1, title: "JavaScript", body: "Post description 1" },
				{ id: 2, title: "React", body: "Post description 2" },
				{ id: 3, title: "Vue", body: "Post description 3" },
				{ id: 4, title: "Work", body: "Post description 4" },
			],
			title: "",
			body: "",
		}
	},
	methods: {
		createPost() { 
			const newPost = {
				id: Date.now(),
				title: this.title,
				body: this.body,
			}
			this.posts.push(newPost)
			this.title = ""
			this.body = ""
		},
	}
}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

.app {
	padding: 30px;
}
</style>