/*。
中间件：匹配路由全，匹配路由完成做的一系列操作。Egg是基于Koa实现的，所以Egg的中间件形式和Koa的中间件形式是一样的，都是基于洋葱圈模型的。
d
中间件也有自己的配置，在框架中，一个完整的中间件是包含了配置处理的，放在app目录下的middleware目录中，exports一个函数
这个函数默认接收两个参数：
options 中间件的配置项，框架会把app.config({middlewareName})传递进来
app 当前的application实例
*/