// 中间件,功能是屏蔽指定的ip

module.exports = (options, app) => {
  // 返回一个异步的方法
  // options是传入参数
  return async function forbidip(ctx, next) {
    var ip = options.ip // 获取要屏蔽的ip
    // 获取客户端当前ip
    console.log('---------中间件----------' + ip)
    if (ctx.request.ip == ip) {
      ctx.status = 403
      ctx.body = 'ip被屏蔽'
    } else {
      await next()
    }
  }
}
