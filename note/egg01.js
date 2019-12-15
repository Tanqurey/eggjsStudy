/*
Egg.js是阿里旗下开发的机遇node与koa的企业级应用开发框架。

Express 和 koa 是nodejs社区广泛应用的框架，简单且扩展性强，适合个人进行开发，
但是框架本身缺少约定，标准的MVC有可能出现各种不同的写法。

Eggjs基于es6/es7以及ts,koa2，是的Node具有更规范的开发模式，更低的学习成本，
更优雅的代码，为企业级框架而生。

Eggjs的特性：
提供基于Egg定制上层框架的能力
高度可扩展的插件机制
内置多进程管理
基于Koa开发，性能优异
框架稳定，测试覆盖率高
渐进式开发

运行环境：Nodejs选择LTS版本，最低要求为8.x

我们推荐直接使用脚手架，只需几条简单指令，即可快速生成项目
$ mkdir egg-example && cd egg-example
$ npm init egg --type=simple
$ npm i

// 介绍目录结构
-- app 开发项目的项目文件  ！
  -- public 静态资源文件
  -- controller 控制器，处理业务逻辑
  -- view 模板文件，就是视图，负责页面的展示
  -- service 服务，相当于model，与数据打交道，和数据库交互等等
  -- middleware 存放中间件
  -- extend 扩展的方法
-- config 项目与插件的配置文件  ！
-- logs 日志文件
-- node_modules 模块依赖
-- run 运行项目时需要的配置文件
-- test 测试用
-- autod.conf.js egg调用的配置文件
-- eslin 代码格式化相关
-- package.json 当前项目的依赖与元数据信息  ！

目录约定规范

*/
