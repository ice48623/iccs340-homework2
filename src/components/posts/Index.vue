<template lang="html">
  <div class="posts">
    <el-table :data="posts" borderstyle="width: 100%">
      <el-table-column prop=id align="center" width="100" label="id"></el-table-column>
      <el-table-column prop=name align="left" width="250" label="Name"></el-table-column>
      <el-table-column prop=content align="left" label="Content"></el-table-column>
  </el-table>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'

export default {
  name: 'posts',
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
    }
  }
}
</script>

<style scoped>
  .posts {
    padding: 0 10px;
  }
</style>
