/*
session是另一种记录用户状态的机制，不同的是cookie保存在客户端中
，session保存在服务器上

seesion的工作流程：
当浏览器访问服务器并发送第一次请求时，服务端
会创建一个session对象，生成一个类似键值对的东西，
然后将key返回给浏览器存储到cookie内，下次携带该cookie，
找到对应的session值

// 使用session:
设置：
this.ctx.session.key = {
  // val
}
获取：
this.ctx.session.key

session的默认设置：
exports.session = {
  key:'EGG_SESS',
  maxAge:24*3600*1000,
  httpOnly:true,
  encrypt:true
}
*/