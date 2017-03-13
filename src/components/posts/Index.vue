<template lang="html">
  <div class="posts">
    <ic340-post :post='posts'></ic340-post>
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
  components: {
    Ic340Post: require('./Post')
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
