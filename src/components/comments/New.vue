<template lang="html">
  <div class="new-post">
    <el-form :label-position="labelPosition" class="demo-ruleForm">
      <el-form-item prop="comment">
        <el-input type="text" v-model="comment.content" placeholder="add comment"></el-input>
      </el-form-item>
      <el-form-item class="comment">
        <el-button type="primary" @click.native="createComment">Save</el-button>
        <router-link :to="{ name: 'Posts.index' }">
          <el-button type="primary">Back</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import CommentsApi from '../../api/comments.js'
import router from '../../router'

export default {
  name: 'new-comment',
  data () {
    return {
      labelPosition: 'left',
      comment: {
        content: ''
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      // default: {}
      default: () => {}
    }
  },
  methods: {
    createComment () {
      var postId = this.post.id
      var content = this.comment.content
      this.comment.content = ''
      CommentsApi.createComment(postId, content,
        function (_comment) {
          console.log(_comment)
          router.push({ name: 'Posts.show', params: { post_id: postId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style lang="css">
  .new-post {
    width: 60%;
    margin: auto;
  }
</style>
