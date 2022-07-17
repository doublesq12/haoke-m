<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/ ">
        <template #icon>
          <span class="toutiao toutiao-shouye"></span>
          <span class="text">首页</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/fr">
        <template #icon>
          <span class="toutiao toutiao-sousuo"></span>
          <span class="text">找房</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/information">
        <template #icon>
          <span class="toutiao toutiao-yuedu"></span>
          <span class="text">资讯</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/profile">
        <template #icon>
          <span class="toutiao toutiao-wode"></span>
          <span class="text">我的</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="less">
:deep(.van-tabbar-item__icon) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  .toutiao{
    font-size: 22px;
  }
  .text{
    font-size: 10px;
  }
}
</style>
