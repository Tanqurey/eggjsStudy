// 中间件

module.exports = (options, app) => {
  // 返回一个异步的方法
  // options是传入参数
  return async function printDate(ctx, next) {
    console.log(options)
    console.log(new Date()+'￥￥￥￥￥￥￥￥￥￥￥￥')
    await next()
  }
}
