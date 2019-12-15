module.exports = (options,app) => {
  // 主要进行秘钥验证
  return async function auth(ctx,next){
    // 设置模板的全局秘钥

    ctx.state.csrf = ctx.csrf
    await next()
  }
}
