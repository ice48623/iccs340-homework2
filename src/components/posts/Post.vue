<template lang="html">
  <div class="post" scope="scope">
    <el-table :data="post" borderstyle="width: 100%" @row-click="handleCurrentChange">
      <el-table-column prop=id align="center" width="100" label="id"></el-table-column>
      <el-table-column prop=name align="left" width="250" label="Name"></el-table-column>
      <el-table-column prop=content align="left" label="Content"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: {
    post: {
      type: Array,
      required: false,
      default: {}
    }
  },
  methods: {
    handleCurrentChange (row) {
      if (this.$route.path === '/posts/' || this.$route.path === '/posts') {
        this.$router.push(this.$route.path + '/' + row.id)
      }
    }
  }
}
</script>

<style lang="css">
.post {
  width: 70%;
  margin: 3% auto 0 auto;

}
</style>
