<template lang="html">
  <div class="comment">
    <span id="user">{{ comment.user.email }}</span>
    <span id="content">{{ comment.content }}</span>
    <div id="line"></div>
  </div>
</template>

<script>

export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style lang="css">
  .comment {
    margin: 20px 0;
  }
  #user {
    color: #1D8CE0;
    margin-right: 20px
  }
  #line {
    border-style: solid;
    border-color: #ccc;
    border-width: 0.5px;
  }
</style>
