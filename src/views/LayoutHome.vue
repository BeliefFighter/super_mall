<template>
  <el-container style="height:100%">
    <el-aside width="auto">
      <base-aside />
    </el-aside>
    <el-container>
      <el-header>
        <base-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutHome'
}
</script>

<style lang="scss" scoped>
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>
