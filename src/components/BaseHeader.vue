<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="changeCollapse"></el-button>
      <h3 style="color:#fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini" @command="handleCommand">
        <span>
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'BaseHeader',
  data() {
    return {
      userImg: require('../assets/images/user.png')
    }
  },
  computed: {
    ...mapState('tab', ['isCollapse'])
  },
  methods: {
    ...mapMutations('tab', ['SET_COLLAPSE']),
    changeCollapse() {
      this.SET_COLLAPSE(!this.isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>