<template>
	<div class="app">
		<h1>Posts page</h1>
		<div class="create__btn">
			<MyButton @click="showDialog">
				Create post
			</MyButton>
			<MySelect v-model="selectedSort"/>
		</div>
		<MyDialog v-model:show="dialogVisible">
			<PostForm @create="createPost" />
		</MyDialog>
		<PostList :posts="posts" @remove="removePost" v-if="!isPostLoading" />
		<div v-else>Loading...</div>
	</div>
</template>

<script>
import axios from "axios";
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
			posts: [],
			dialogVisible: false,
			isPostLoading: false,
			selectedSort: "",
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
		},
		async fetchPosts() {
			try {
				this.isPostLoading = true
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
				this.posts = response.data
			} catch (error) {
				alert("Error: " + error)
			} finally {
				this.isPostLoading = false
			}
		},
	},
	mounted() {
		this.fetchPosts()
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
.create__btn {
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
	margin-bottom: 15px;
}
</style>