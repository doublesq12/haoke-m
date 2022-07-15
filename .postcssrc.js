module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // rootValue:37.5,
      rootValue: (module) => {
        if (/vant/gi.test(module.file)) {
          return 37.5
        } else {
          return 75
        }
      },
      propList: ['*']
    }
  }
}