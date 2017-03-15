<template lang="html">
  <div class="new-post">
    <el-form label-width="120px" class="demo-ruleForm">
      <el-form-item label="Title" prop="name">
        <el-input type="text" v-model="post.name" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="Content" prop="content">
        <el-input type="textarea" :rows="10" v-model="post.content" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="createPost">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    createPost () {
      PostsApi.createPost(this.post,
        function (_post) {
          router.push({ name: 'Posts.index' })
        }
      )
    }
  }
}
</script>

<style lang="css">
  .new-post {
    margin-top: 50px;
    width: 50%;
  }
</style>
