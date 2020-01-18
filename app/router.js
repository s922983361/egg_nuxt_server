'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app
	
	//middleware example***********
	// const gzip = app.middleware.gzip({ threshold: 1024 });
	// router.get('/needgzip', gzip, app.controller.handler);
	router.get('/ezshop/api', controller.home.index)
	// RESTful URL Style
	router.resources('/ezshop/api/admin/test', controller.admin.test)


	/************************************************** Admin API ***/ 
	/********************************** public API */
	router.post(`/ezshop/api/admin/login`, controller.admin.manager.login)

	/********************************** private API */
	
	// Common RESTful API path
	require('./router/admin/common')(app)
	// Manager RESTful API path
	require('./router/admin/manager')(app)
	// Role RESTful API path
	require('./router/admin/role')(app)
	// Access RESTful API path
	require('./router/admin/access')(app)


	
	
	/************************************************** Web API ***/ 
	/********************************** public API */
	

	/********************************** private API */
}
