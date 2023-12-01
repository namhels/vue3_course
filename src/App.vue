<template>
	<div class="app">
		<PostForm @create="createPost" />
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
		}
	},
	methods: {
		createPost(post) { 
			this.posts.push(post);
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