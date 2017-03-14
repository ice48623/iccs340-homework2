<template lang="html">
  <div class="sign-in">
    <el-card class="box-card">
      <el-form label-width="70px" class="demo-ruleForm">
        <el-form-item label="Email" prop="pass">
          <el-input type="email" v-model="email" placeholder="" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input type="password" v-model="password" placeholder="" auto-complete="off" @keyup.enter.native="login"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click.native="login">Login</el-button>
    </el-card>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'sign-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      UsersApi.login(this.email, this.password, function (_response) {
        // NOTE: Posts.index is not yet implemented
        router.push({ name: 'Posts.index' })
      })
    }
  }
}
</script>

<style lang="css">
.sign-in {
  width: 25%;
  margin: 10% auto 0 auto;
}
</style>
