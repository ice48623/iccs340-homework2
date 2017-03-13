<template lang="html">
  <div class="comment">
    <div class="container">
        <span>{{ comment.user.email }}</span>
        <span>{{ comment.content }}</span>
      </div>
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
</style>
