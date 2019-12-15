/*
讲解egg中cookie的使用：
cookie是存储于访问者的计算机中的变量。可以让我们用同一浏览器访问同一个域的时候
共享数据。

数据持久化，关闭浏览器再打开数据仍存在

设置方法：
ctx.cookies.set(key,val,options)

cookie默认在关闭浏览器时自动清除

options是参数，有很多个：
maxAge: 浏览器保存cookie的最长时间
expires :cookie的过期时间，会被maxAge覆盖
path：cookies生效的路径，默认同一域共享
domain： 设置键值对生效的域名，可以配置成指在指定域名才能访问
httpOnly ：cookie只允许被后台访问

注意：egg.js内的cookie默认情况下没法设置中文

获取语法：
ctx.cookie.get(key.options)

清除cookie:
this.ctx.cookies.set(name,null)
或者把maxAge设为0
*/