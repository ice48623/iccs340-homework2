<template lang="html">
  <div class="post">
    <ic340-post :post='post'></ic340-post>
    <h2>All Comments</h2>
    <el-card class="box-card">
      <div v-for="comment in comments">
        <ic340-comment :comment='comment'></ic340-comment>
      </div>
    </el-card>
    <ic340-new-comment :post='post[0]'></ic340-new-comment>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import CommentsApi from '../../api/comments.js'

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
  .box-card {
    width: 60%;
    margin: 0 auto 20px auto;
    text-align: left;
  }
</style>
