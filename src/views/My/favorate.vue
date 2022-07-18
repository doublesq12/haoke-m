<template>
  <div class="favorate">
    <van-nav-bar title="收藏列表" left-arrow @click-left="backToMyPage" />
    <van-row type="flex" v-for="(item, index) in favoriteList" :key="index">
      <van-image width="100" height="100" :src="baseURL + item.houseImg" />
      <div class="text">
        <p class="pone">{{ item.title }}</p>
        <p class="ptwo">{{ item.desc }}/</p>
        <p class="pthree">{{ item.tags[0] }}</p>
        <p class="pfour">{{ item.price }}元/月</p>
      </div>
    </van-row>
  </div>
</template>

<script>
import { getFavoriteList } from '@/api/user'
export default {
  data() {
    return {
      favoriteList: [],
      baseURL: 'http://liufusong.top:8080'
    }
  },
  methods: {
    backToMyPage() {
      this.$router.back()
    },
    async getFavoriteList() {
      const { data } = await getFavoriteList()
      // console.log(data)
      this.favoriteList = data.body
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
  :deep(.van-row) {
    padding: 40px 0;
    border-bottom: 1px solid #e5e5e5;
  }
  .text {
    font-size: 11px;
    margin-left: 20px;
  }
  .pone {
    font-size: 15px;
  }
  .ptwo {
    font-size: 12px;
    color: #afb2b3;
  }
  .pthree {
    color: #39becd;
    background-color: #e1f5f8;
    width: 80px;
  }
  .pfour {
    font-size: 12px;
    color: #fa5741;
  }
}
</style>
