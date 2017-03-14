<template lang="html">
  <div class="top-sidenav">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link :to="{ name: 'Posts.index' }">
          <i class="el-icon-document"></i>
          <span>All Posts</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'Posts.new' }">
          <i class="el-icon-plus"></i>
          <span>New Post</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3" @click.native="logout">Logout</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import UsersApi from './api/users.js'
  import router from './router'
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      logout () {
        console.log('methods.logout')
        UsersApi.logout(function (_response) {
          router.push({ name: 'Users.sign_in' })
        })
      }
    }
  }
</script>

<style lang="css">
  a {
    text-decoration: none !important;
  }
</style>
