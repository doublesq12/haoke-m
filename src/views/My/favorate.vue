<template>
<!-- 我的收藏点进去收藏列表页面 -->
  <div class="favorate">
    <van-nav-bar title="收藏列表" left-arrow @click-left="backToMyPage" />
    <!-- <van-row type="flex" v-for="(item, index) in favoriteList" :key="index">
      <van-image width="100" height="100" :src="baseURL + item.houseImg" />
      <div class="text">
        <p class="pone">{{ item.title }}</p>
        <p class="ptwo">{{ item.desc }}/</p>
        <p class="pthree">{{ item.tags[0] }}</p>
        <p class="pfour">{{ item.price }}元/月</p>
      </div>
    </van-row> -->
    <cell :list="favoriteList"></cell>
  </div>
</template>

<script>
import cell from '@/components/cell.vue'
import { getFavoriteList } from '@/api'
export default {
  data() {
    return {
      favoriteList: []
    }
  },
  components: {
    cell
  },
  methods: {
    backToMyPage() {
      this.$router.back()
    },
    async getFavoriteList() {
      const { data } = await getFavoriteList()
      console.log(data)
      this.favoriteList = data.body
      console.log(this.favoriteList)
      // console.log(data.body)
    }
  },
  created() {
    this.getFavoriteList()
  }
}
</script>

<style scoped lang="less">
.favorate {
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
  }
  :deep(.van-icon) {
    color: #fff;
  }
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
</style>
