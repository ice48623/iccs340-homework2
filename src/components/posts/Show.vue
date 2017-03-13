<template lang="html">
  <div class="post">
    <ic340-post :post='post'></ic340-post>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'

export default {
  name: 'post',
  components: {
    Ic340Post: require('./Post')
  },
  data () {
    return {
      post: [],
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
      })
    }
  }
}
</script>

<style lang="css">
</style>
