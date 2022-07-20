<template>
<!-- 收藏列表、房屋管理再点进去的复用详情页 -->
  <div class="component">
    <div class="top">
      <van-nav-bar
        left-arrow
        @click-left="backToFavoratePage"
        :title="houseDetailObj.community"
      />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in houseDetailObj.houseImg"
          :key="index"
        >
          <template #default>
            <van-image :src="baseURL + item" width="380px" />
          </template>
        </van-swipe-item>
      </van-swipe>
      <!-- 1312 -->
      <div class="divone">
        <p class="number">{{ houseDetailObj.title }}</p>
        <div v-for="(item, index) in houseDetailObj.tags" :key="index">
          <p class="metro">{{ item }}</p>
        </div>
      </div>
      <!-- 45343/月 -->
      <van-grid :border="false" :column-num="3" class="van-gridone">
        <van-grid-item class="rent">
          <span class="one">{{ houseDetailObj.price }}/月</span>
          <span class="two">租金</span>
        </van-grid-item>
        <van-grid-item class="houseType">
          <span class="one">{{ houseDetailObj.roomType }}</span>
          <span class="two">房型</span>
        </van-grid-item>
        <van-grid-item class="area">
          <span class="one">{{ houseDetailObj.size }}平米</span>
          <span class="two">面积</span>
        </van-grid-item>
      </van-grid>
      <!-- 精装 -->
      <van-grid
        :border="false"
        :column-num="2"
        :center="false"
        gutter="5px"
        class="hardcover"
      >
        <van-grid-item class="left">
          <span class="outside">装修:<span class="inside">精装</span></span>
          <span class="outside"
            >楼层:<span class="inside">{{ houseDetailObj.floor }}</span></span
          >
        </van-grid-item>
        <van-grid-item class="right">
          <span
            class="outside"
            v-for="(item, index) in houseDetailObj.oriented"
            :key="index"
            >朝向:<span class="inside">{{ item }}</span></span
          >
          <span class="outside">类型:<span class="inside">普通住宅</span></span>
        </van-grid-item>
      </van-grid>
    </div>

    <div class="center">
      <!-- 小区：天山星城 -->
      <div class="community">小区:天山星城</div>
      <div class="map">
        <Map
          :coord="houseDetailObj.coord"
          :title="houseDetailObj.community"
        ></Map>
      </div>

      <div>
        <!-- 房屋配套 -->
        <div class="houseMatching">房屋配套</div>
        <!-- 洗衣机 -->
        <van-grid class="washingMachine">
          <van-grid-item
            :text="item"
            v-for="(item, index) in houseDetailObj.supporting"
            :key="index"
          >
            <template #icon>
              <van-icon name="pending-payment" />
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="bottom">
      <!-- 房屋概况 -->
      <div class="houseSurvey">
        <div class="survey">房屋概况</div>
        <div>
          <van-row type="flex" align="center">
            <img src="http://liufusong.top:8080/img/avatar.png" alt="头像" />
            <div class="landlord">
              <p>王女士</p>
              <van-icon name="shield-o" class="authentication" />
              <span>已认证房主</span>
            </div>
            <van-button>发消息</van-button>
          </van-row>
          <p class="describe">
            1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
            2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
            3.人车分流，环境优美。
            4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
          </p>
        </div>
      </div>
    </div>
    <van-grid direction="horizontal" :column-num="3" class="button">
      <van-grid-item icon="star-o" text="收藏" />
      <van-grid-item text="在线咨询" />
      <van-grid-item text="电话预约" class="lastone" />
    </van-grid>
  </div>
</template>

<script>
import { getHouseDetailList } from '@/api'
import Map from './map.vue'
export default {
  data() {
    return {
      houseDetailObj: {},
      baseURL: 'http://liufusong.top:8080'
    }
  },
  methods: {
    backToFavoratePage() {
      this.$router.back()
    },

    async getHouseDetailList() {
      const id = this.$store.state.citycode
      // console.log(id)
      try {
        const { data } = await getHouseDetailList(id)
        this.houseDetailObj = data.body
        console.log(data.body)
      } catch (error) {
        console.log('获取列表失败')
      }
      // this.favoriteList = data.body
      // console.log(this.favoriteList)
      // console.log(data.body)
    }
  },
  created() {
    this.getHouseDetailList()
  },
  components: {
    Map
  }
}
</script>

<style scoped lang="less">
.component {
  background-color: #f5f5f9;
  padding-bottom: 120px;
  .top {
    background-color: #fff;
  }
  .center {
    margin: 20px 0;
    background-color: #fff;
  }
  .bottom {
    background-color: #fff;
  }
  .button {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .community {
    padding: 25px 0;
  }
  :deep(.van-icon.van-icon-star-o) {
    color: #000;
  }
  .lastone {
    background-color: #21b97a;
    :deep(.van-hairline) {
      background-color: #21b97a;
    }
    :deep(.van-grid-item__text) {
      color: #fff;
    }
  }
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
  }
  :deep(.van-icon) {
    color: #fff;
  }
  :deep(.number) {
    font-size: 36px;
  }
  :deep(.metro) {
    color: #39becd;
    background-color: #e1f5f8;
    width: 115px;
    font-size: 36px;
  }
  :deep(.one) {
    color: #fa5741;
    font-size: 36px;
    margin-bottom: 8px;
    font-weight: bolder;
  }
  :deep(.two) {
    color: #999;
    font-size: 30px;
  }
  :deep(.van-gridone) {
    border-bottom: 5px solid #e5e5e5;
  }
  :deep(.divone) {
    border-bottom: 5px solid #e5e5e5;
  }
  :deep(.outside) {
    color: #999;
    padding-right: 5px;
    line-height: 60px;
    font-size: 30px;
  }
  :deep(.inside) {
    color: #000;
  }
  :deep(.houseMatching) {
    font-weight: 700;
    padding: 25px 10px;
    font-size: 35px;
    border-bottom: 5px solid #e5e5e5;
  }
  :deep(.van-grid-item__icon-wrapper) {
    color: #000;
    z-index: 99;
  }
  :deep(.washingMachine) {
    margin-bottom: 10px;
  }
  :deep(.survey) {
    border-bottom: 5px solid #e5e5e5;
    padding-bottom: 30px;
    padding-left: 12px;
    font-size: 33px;
    font-weight: 700;
  }
  img {
    width: 100px;
    height: 100px;
    margin: 10px 10px 0 0;
    padding: 30px 30px 10px 20px;
  }
  :deep(.landlord) {
    font-size: 14px;
  }
  :deep(.landlord > span) {
    color: red;
  }
  :deep(.authentication) {
    color: red;
  }
  :deep(.van-row) {
    position: relative;
  }
  :deep(.van-button) {
    position: absolute;
    right: 40px;
    top: 60px;
    color: #33be85;
    border: 1px solid #33be85;
    border-radius: 3px;
    padding: 3px 15px;
    width: 150px;
    height: 60px;
  }
  :deep(.describe) {
    line-height: 1.6;
    padding: 10px 0 10px 10px;
    color: #333;
    font-size: 14px;
    margin-bottom: 20px;
  }
  :deep(.community) {
    font-size: 33px;
    font-weight: 400;
  }
  :deep(.map) {
    width: 750px;
    height: 300px;
  }
  :deep(.BMap_bottom) {
    width: 100px;
  }
  :deep(.van-icon-pending-payment) {
    color: #000;
  }
  .hardcover {
    margin-bottom: 20px;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 450px;
}
</style>
