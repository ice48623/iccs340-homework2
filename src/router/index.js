import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import PostsIndex from '@/components/posts/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: SignIn
    },
    {
      path: '/sign_in',
      name: 'Users.sign_in',
      component: SignIn
    },
    {
      path: '/posts',
      name: 'Posts.index',
      component: PostsIndex
    }
  ]
})
