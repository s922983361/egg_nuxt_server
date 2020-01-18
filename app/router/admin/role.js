const controllerName = 'role'
const URL = '/ezshop/api/admin/'

module.exports = app => {	
	const { router, controller, jwt } = app	

	router.get(`${URL}${controllerName}/:pageIndex/:pageSize`, jwt, controller.admin[controllerName].index)
	router.get(`${URL}${controllerName}/:id`, jwt, controller.admin[controllerName].edit)	
	router.put(`${URL}${controllerName}/:id`, jwt, controller.admin[controllerName].doEditOne)
	router.post(`${URL}${controllerName}`, jwt, controller.admin[controllerName].doAddOne)
	router.delete(`${URL}${controllerName}/:id`, jwt, controller.admin[controllerName].deleteOne)
}