<template>
  <div class="rent">
    <van-nav-bar title="房屋管理" left-arrow @click-left="backToMyPage" />
    <!-- <van-row type="flex" v-for="(item, index) in favoriteList" :key="index">
      <van-image width="100" height="100" :src="baseURL + item.houseImg" />
      <div class="text">
        <p class="pone">{{ item.title }}</p>
        <p class="ptwo">{{ item.desc }}/</p>
        <p class="pthree">{{ item.tags[0] }}</p>
        <p class="pfour">{{ item.price }}元/月</p>
      </div>
    </van-row> -->
    <cell :list="publishedList"></cell>
  </div>
</template>

<script>
import cell from '@/components/cell.vue'
import { getPublishedList } from '@/api'
export default {
  data() {
    return {
      publishedList: []
    }
  },
  components: {
    cell
  },
  methods: {
    backToMyPage() {
      this.$router.back()
    },
    async getPublishedList() {
      try {
        const { data } = await getPublishedList()
        // console.log(data)
        this.publishedList = data.body
        // console.log(this.publishedList)
        // console.log(data.body)
      } catch (error) {
        console.log('获取列表失败')
      }
    }
  },
  created() {
    this.getPublishedList()
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
