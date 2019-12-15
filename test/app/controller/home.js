'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg哈哈哈哈哈哈';
  }
  async news() {
    const { ctx } = this;
    ctx.body = '这里是新闻频道。';
  }
}

module.exports = HomeController;
