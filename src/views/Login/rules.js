export const usernameRules = [
  { required: true, message: '请填写用户名' },
  { pattern: /^[\w]{5,8}$/, message: '用户名格式不正确' }
]
export const passwordRules = [
  { required: true, message: '请填写密码' },
  { pattern: /^[\w]{6,12}$/, message: '密码格式不正确' }
]
