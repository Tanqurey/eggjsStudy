// 外部可通过this.app.foo()调用该方法
module.exports = {
  foo(param) {
    // this就是app对象，在其中可以调用app上的其他方法。或访问属性
    console.log(this)
  }
}
