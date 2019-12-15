'use strict'
const Controller = require('egg').Controller;
class NewsController extends Controller{
  async index(){
    // this.ctx.body = '新闻首页';
    var msg = '使用ejs模板引擎';
    // 尽量不要在控制器内定义数据
    // var list = ['aaa','bbb','ccc']
    // 注意异步,我们将从service中取数据
    var list = await this.service.news.getNewsList();
    // 打印config里面的api
    console.log(this.config.api)
    var user = await this.service.user.getUserInfo();
    // 注意异步渲染
    await this.ctx.render('news',{
      // 传参
      msg,
      list,
      user
    });
  }
  async content(){
    // 获取get传值
    var query = this.ctx.query;
    console.log(query)
    this.ctx.body = '新闻详情';
  }

  async list(){
    // 获取动态路由传值
    var param = this.ctx.params;
    console.log(param);
    this.ctx.body = '新闻列表';
  }
}
module.exports = NewsController;