<template>
  <div class="my">
    <div class="banner">
      <van-row type="flex">
        <van-image
          round
          width="1.76rem"
          height="1.76rem"
          :src="baseURL + userInfo.avatar"
        />
        <h4 class="text">
          {{ !!$store.state.user.token ? userInfo.nickname : '游客' }}
        </h4>
        <van-button
          type="primary"
          round
          class="exit-btn"
          @click="logout"
          v-if="isLogin"
          >退出</van-button
        >
        <van-button
          type="primary"
          round
          class="exit-btn"
          @click="goLogin"
          v-else
          >去登录</van-button
        >
        <div>
          <span class="edit" v-if="isLogin">
            <i class="toutiao toutiao-youjiantou"></i>编辑个人资料
          </span>
        </div>
      </van-row>
    </div>
    <header>
      <!-- 登录的头部盒子 -->
      <div v-if="isLogin" class="user-info">
        <img :src="baseURL + userInfo.avatar" alt="" />
      </div>
      <!-- 未登录的头部盒子 -->
      <div v-else class="login-register">
        <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      </div>
    </header>
    <main>
      <van-grid :column-num="3">
        <van-grid-item text="我的收藏" to="/favorate">
          <template #icon>
            <van-icon name="star-o" />
          </template>
        </van-grid-item>
        <van-grid-item text="我的出租">
          <template #icon>
            <van-icon name="wap-home-o" />
          </template>
        </van-grid-item>
        <van-grid-item text="看房记录">
          <template #icon>
            <van-icon name="clock-o" />
          </template>
        </van-grid-item>
        <van-grid-item text="成为房主">
          <template #icon>
            <van-icon name="home-o" />
          </template>
        </van-grid-item>
        <van-grid-item text="个人资料">
          <template #icon>
            <van-icon name="contact" />
          </template>
        </van-grid-item>
        <van-grid-item text="联系我们">
          <template #icon>
            <van-icon name="service-o" />
          </template>
        </van-grid-item>
      </van-grid>
    </main>
    <footer>
      <div>
        <van-row type="flex" justify="space-around">
          <van-image
            src="http://liufusong.top:8080/img/profile/join.png"
            class="footer-img"
          />
        </van-row>
      </div>
    </footer>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
export default {
  name: 'My',
  data() {
    return {
      userInfo: {},
      baseURL: 'http://liufusong.top:8080'
    }
  },
  computed: {
    isLogin() {
      return !!this.$store.state.user.token
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    logout() {
      this.$store.commit('setUser', {})
    },
    goLogin() {
      this.$router.push('/login')
    },
    async getUserInfo() {
      if (this.isLogin) {
        try {
          const res = await getUserInfo()
          // console.log(res)
          this.userInfo = res.data.body
        } catch (error) {
          this.$toast.fail('请重新登录')
        }
        // console.log(res.data.body)
      }
    }
  }
}
</script>

<style scoped lang="less">
.my {
  position: relative;
}
header {
  // width: 600px;
  height: 700px;
  // background-color: pink;
  img {
    width: 100%;
  }
  .login-register {
    width: 100%;
    height: 300px;
  }
}
footer {
  :deep(.footer-img) {
    width: 690px;
    height: 170px;
  }
}
.banner {
  position: absolute;
  z-index: 999;
  left: 80px;
  top: 300px;
  background-color: #fff;
  width: 600px;
  height: 400px;
  box-shadow: 0 0 10px 3px #ddd;
  :deep(.exit-btn) {
    border-radius: 30px;
    color: #fff;
    padding: 2px 15px;
    background: #21b97a;
    font-size: 12px;
    width: 150px;
    height: 40px;
  }
  :deep(.van-image) {
    position: absolute;
    top: -60px;
    left: 220px;
  }
  .text {
    font-size: 13px;
    font-weight: 400;
  }
  .van-row {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  :deep(.edit) {
    font-size: 12px;
  }
}
</style>
