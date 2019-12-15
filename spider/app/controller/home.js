'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi,egg'
    // 调用extend里面扩展的context
    console.log(this.ctx.getApi())

    // 调用extend里面扩展的request
    console.log(this.ctx.request.foo())

    // 设置cookie
    // 下次访问cookie失效
    this.ctx.cookies.set('uid', '用户的id是：4555efc', {
      //过期日期
      maxAge: 1000 * 3600 * 24, // 1天过期，单位毫秒
      httpOnly: true,
      signed: true, // 对cookie进行签名以避免用户修改，一旦修改cookie不可用
      encrypt: true //是否对cookie进行加密，一旦加密，获取时需要对cooki进行解密，cookie加密后就可以设置中文了
    })

    // 设置session
    this.ctx.session.user = {
      name:'ladyJ',
      age:26
    }
  }
}

module.exports = HomeController
