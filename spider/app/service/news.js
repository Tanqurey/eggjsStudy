'use strict'

const Service = require('egg').Service;

class NewsService extends Service{
  async getNewsList(){
    // 通过抓取接口返回数据
    // curl可以获取远程的数据

    var url = this.config.api+'appapi.php?a=getPortalList&catid=20&page=1'
    var response = await this.ctx.curl(url)
    var data = JSON.parse(response.data)
    return data.result
  }
  async getNewsContent(aid){
    var url = this.config.api+'appapi.php?a=getPortalArticle&catid=20&aid='+aid;
    var response = await this.ctx.curl(url)
    var data = JSON.parse(response.data)
    return data.result
  }
}

module.exports = NewsService;