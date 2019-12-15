'use strict'

const Controller = require('egg').Controller

class formController extends Controller {
  async index() {
    // 这样配置比较麻烦，不利于多处使用
    await this.ctx.render('form', {
      // 用户访问该页面时生成的一个秘钥
      // csrfToken: this.ctx.csrf
    })
  }

  async submit() {
    // 获取post的提交数据
    console.log(this.ctx.request.body)
    this.ctx.body = this.ctx.request.body
  }
}

module.exports = formController
