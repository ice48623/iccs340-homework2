<template lang="html">
  <div class="new-post">
    <el-form label-width="120px" class="demo-ruleForm">
      <el-form-item label="Add Comment" prop="comment">
        <el-input type="text" v-model="comment.content" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="createComment">Save</el-button>
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
</style>
