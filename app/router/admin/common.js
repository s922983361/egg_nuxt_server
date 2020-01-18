const controllerName = 'common'
const URL = '/ezshop/api/admin/'

module.exports = app => {	
	const { router, controller, jwt } = app	
	//取得特殊需求接口
	router.get(`${URL}${controllerName}/getList/:modelName`, jwt, controller.admin[controllerName].getList)
	//CRUD接口
	router.get(`${URL}${controllerName}/:modelName`, jwt, controller.admin[controllerName].getData)	
	router.put(`${URL}${controllerName}/:modelName/:id`, jwt, controller.admin[controllerName].updateData)
	router.post(`${URL}${controllerName}/:modelName`, jwt, controller.admin[controllerName].saveData)
	router.delete(`${URL}${controllerName}/:modelName/:id`, jwt, controller.admin[controllerName].deleteData)
}