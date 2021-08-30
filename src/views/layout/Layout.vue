<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="left-con">
      左侧菜单
    </div>
    <!-- 右侧内容 -->
    <div class="center-con">
      <!-- router-view 用于视图切换区域 -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  mounted () {
    //  打印一下看看路由
    console.log(this.$router.options.routes)
  }
}
</script>

<style scoped>
.layout-container {
  width: 100%;
  height: 100%;
  position: relative;
  /*overflow: hidden;*/
}
.layout-container .left-con {
  position: absolute;
  width: 180px;
  height: 100%;
  left: 0;
  top: 0;
  border-right: 1px solid #e6e6e6;
  /*overflow: hidden;*/
}
/*.layout-container .left-con .el-menu {*/
/*  border: none;*/
/*}*/
.layout-container .center-con {
  position: absolute;
  left: 180px;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
