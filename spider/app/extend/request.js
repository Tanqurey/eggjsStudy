/*
外部可以通过 this.ctx.request.footer
调用方法
*/
module.exports = {
  foo(param){
    return this.header.host
  }
}