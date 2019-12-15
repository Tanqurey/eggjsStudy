'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/news', controller.news.index);  
  router.get('/', controller.home.index);
  router.get('/form', controller.form.index);
  router.post('/submit', controller.form.submit);
  router.get('/newscontent',controller.news.content)
};
