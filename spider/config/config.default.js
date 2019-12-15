/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576132269923_6663'

  // 配置session与cookie类似
  config.session = {
    maxAge:5000,
    key:'My_Session',
    renew:true // 延长会话有效期，每次刷新页面，session将被延期
  }

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  // 配置中间件
  config.middleware = ['printdate','forbidip','auth']

  // 为相应的中间件传入参数
  config.printdate = {
    name:'Johnson'
  }

  config.forbidip = {
    ip:'192.21.36.4'
  }
  
  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  }

  // 配置url跟地址
  config.api = 'http://www.phonegap100.com/'
  return {
    ...config,
    ...userConfig
  }
}
