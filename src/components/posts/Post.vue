<template lang="html">
  <div class="post">
    <el-table :data="post" borderstyle="width: 100%">
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
  }
}
</script>

<style lang="css">
</style>
