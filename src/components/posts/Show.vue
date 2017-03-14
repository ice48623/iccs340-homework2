<template lang="html">
  <div class="post">
    <ic340-post :post='post'></ic340-post>
    <div v-for="comment in comments">
      <ic340-comment :comment='comment'></ic340-comment>
    </div>
    <ic340-new-comment :post='post[0]'></ic340-new-comment>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import CommentsApi from '../../api/comments.js'
import UsersApi from '../../api/users.js'

export default {
  name: 'post',
  components: {
    Ic340Post: require('./Post'),
    Ic340Comment: require('../comments/Comment'),
    Ic340NewComment: require('../comments/New')
  },
  data () {
    return {
      post: [],
      comments: [],
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    UsersApi.checkLoggedIn()
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      PostsApi.getPost(this.$route.params.id, _post => {
        this.post = [_post]
        CommentsApi.getComments(_post.id, _comments => {
          this.comments = _comments
        })
      })
    }
  }
}
</script>

<style lang="css">
</style>
