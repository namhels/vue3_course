<template>
	<div class="app">
		<h1>Posts page</h1>
		<MyButton @click="showDialog" class="btn">
			Create post
		</MyButton>
		<MyDialog v-model:show="dialogVisible">
			<PostForm @create="createPost" />
		</MyDialog>
		<PostList :posts="posts" @remove="removePost" />
	</div>
</template>

<script>
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"

export default {
	name: "App",
	components: {
		PostForm,
		PostList,
	},
	data() {
		return {
			posts: [
				{ id: 1, title: "JavaScript", body: "Post description 1" },
				{ id: 2, title: "React", body: "Post description 2" },
				{ id: 3, title: "Vue", body: "Post description 3" },
				{ id: 4, title: "Work", body: "Post description 4" },
			],
			dialogVisible: false,
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
			this.dialogVisible = false;
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		showDialog() {
			this.dialogVisible = true;
		}
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
.btn {
	margin-top: 15px;
	margin-bottom: 15px;
}
</style>