/*
模板引擎讲解使用ejs
即egg-view-ejs

控制器内的this会被挂载上哪几个属性呢？

ctx 当前请求的上下文Context对象的实例，通过它我们可以拿到框架封装好的
处理当前请求的各种便捷属性和方法。

app 当前应用Application对象的实例，通过它我们可以拿到框架提供的全局对象和方法

service 应用定义的Service，通过它我们可以访问到抽象的业务层，等价于this.ctx.servce

config 运行时的配置项

logger logger对象。打印日志使用

服务的命名规则：
Service文件必须放在app/service 目录,可以支持多级目录，访问的时候可以通过目录名级联访问


*/