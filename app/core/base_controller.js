'use strict'
const Controller = require('egg').Controller
const { _CODE, CTXBODY } = require('../statusCode')
class BaseController extends Controller {

    async resCode (code, boolen) {
        return this.ctx.body = CTXBODY(code, boolen)
    }

    async error (err) {
        const { ctx , app} = this
        app.emit('error', err, ctx)
        const CODE = _CODE.SERVER_ERROR
        return ctx.body = CTXBODY(CODE)
    }

    /**
     * //https://www.npmjs.com/package/parameter
     * @param {*} ruleObj obj  
     * @param {*} method  [ctx.request.body , ctx.query, ctx.params]
     */
    async isValidated (ruleObj, method ) {
        const { ctx, app } = this 
        //error return "obj" if it doesnt pass or "undefined"
        let error = app.validator.validate( ruleObj, method)
        
        if(!ctx.helper.isEmpty(error)) return false        
        return true
    }
    /**
     * @desc return obj.value to escape HTML
     * @param {*} dataObj  ctx.request.body
     */
    async escape (dataObj) {
        for (const key in dataObj) {
            if (dataObj.hasOwnProperty(key)) {
                if(!this.ctx.helper.isEmpty(dataObj[key])) {
                    dataObj[key] = this.ctx.helper.escape(dataObj[key])
                }
            }
        }
        return dataObj
    }
    /**
     * @desc egg-bcrypt async encrypt
     * @param {*} pwd 
     */
    async encrypt (pwd) {
        try {
            const hashPassword = await this.ctx.genHash(pwd)
            return hashPassword
        }catch (err) {
            this.ctx.app.emit('error', err, ctx)
        }        
    }
    /**
     * @desc egg-bcrypt async decrypt return boolen
     * @param {*} pwd input password
     * @param {*} db_pwd hash password in database
     */
    async decrypt (pwd, db_pwd) {
        try {
            const res = await this.ctx.compare(pwd, db_pwd)
            return res
        }catch (err) {
            this.ctx.app.emit('error', err, ctx)
        }        
    }
}
module.exports = BaseController;