module.exports = {
  getApi(){
    //这里的this是context对象
    return this.request.host
  }
}