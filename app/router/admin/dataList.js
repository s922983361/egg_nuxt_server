const controllerName = 'dataList'

module.exports = app => {
    const { router, controller } = app
	const isLogin = app.passport.authenticate('jwt', { session: false })

	router.get(`/ezshop/api/admin/${controllerName}/:modelName`, controller.admin[controllerName].getByModelName)
	
}