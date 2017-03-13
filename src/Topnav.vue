<template lang="html">
  <div class="top-sidenav">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal">
      <router-link :to="{ name: 'Posts.index' }">
        <el-menu-item index="1">Posts</el-menu-item>
      </router-link>
      <router-link :to="{ name: 'Posts.new' }">
        <el-menu-item index="2">New Post</el-menu-item>
      </router-link>
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
</style>
