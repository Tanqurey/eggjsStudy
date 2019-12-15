// 扩展内部可以引入第三方模块
var sd = require('silly-datetime')
module.exports = {
  formatTime(time) {
    // this 是 helper对象，在其中可以调用其他helper方法
    return sd.format(new Date(time*1000), 'YYYY-MM-DD HH:mm')
  }
}
