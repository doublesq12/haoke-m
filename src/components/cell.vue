<template>
  <div class="favorate" >
    <van-row type="flex" v-for="(item, index) in list" :key="index" @click="goDetailPage(item.houseCode)">
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
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      baseURL: 'http://liufusong.top:8080'
    }
  },
  methods: {
    goDetailPage(id) {
      this.$store.commit('getCityId', id)
      console.log(id)
      this.$router.push('/component')
    }
  }
  // created() {
  //   console.log(this.list)
  // }
}
</script>

<style scoped lang="less">
.favorate {
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
