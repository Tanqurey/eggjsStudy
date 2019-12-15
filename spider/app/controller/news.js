'use strict'

const Controller = require('egg').Controller

class NewsController extends Controller {
  async index() {
    var list = await this.service.news.getNewsList()
    await this.ctx.render('index', {
      list
    })

    // 获取session
    console.log(this.ctx.session.user)
    // 设置过期时间,建议统一配置
    // this.ctx.session.maxAge = 2000
  }
  async content() {
    //获取get传值
    var aid = this.ctx.query.aid
    var content = await this.service.news.getNewsContent(aid)
    // console.log(content)
    // 获取cookie值，其他页面也可以访问到
    console.log(
      'cookie是' +
        this.ctx.cookies.get('uid', {
          encrypt: true // 解密
        })
    )
    await this.ctx.render('newscontent', {
      content: content[0]
    })
  }
}

module.exports = NewsController
