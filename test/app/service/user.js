'use strict'

const Service = require('egg').Service

class UsersService extends Service {
  async getUserInfo() {
    return {
      name:'张三',
      age:18
    }
  }
}
module.exports = UsersService
