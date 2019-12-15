'use strict'

const Service = require('egg').Service;

class NewsService extends Service{
  async getNewsList(){
    // 主要获取数据库数据
    var list = ['111aaa','2222','3333']

    // 调用另一个服务的数据
    var user = await this.service.user.getUserInfo();
    console.log(user)
    return list;
  }
}
module.exports = NewsService;