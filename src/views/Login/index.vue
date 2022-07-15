<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="backToPrePage"
    >
      <template #left>
        <van-icon name="cross" />
      </template>
    </van-nav-bar>
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="usernameRules"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="passwordRules"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant'
import { usernameRules, passwordRules } from './rules'
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameRules,
      passwordRules
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('按钮')
    },
    backToPrePage() {
      this.$router.back()
    },
    async login() {
      this.$toast.loading({
        message: '不要着急，加载中...',
        forbidClick: true
      })
      // console.log('submit', values)
      const res = await login(this.username, this.password)
      this.$store.commit('setUser', res.data.body)
      console.log(res)
      this.$router.push('/profile')
      this.$toast.success('登录成功')
      if (
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        this.$toast.fail(res.data.description)
      }

      // console.log(error)
      // this.$toast.fail('登录失败')
      // const status = res.data.status
      // switch (status) {
      //   case 400:
      //     this.$toast.fail('传入的参数缺失')
      //     break
      //   case 401:
      //     this.$toast.fail('用户的账号密码错误')
      //     break
      //   case 404:
      //     this.$toast.fail('接口不存在')
      //     break
      // }
    }
  }
}
</script>

<style scoped lang="less">
.navbar {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  .van-icon {
    color: #fff;
  }
}
.van-button {
  background-color: #1cb676;
}
.van-nav-bar__content {
  width: 375px;
  height: 45px;
}
</style>
