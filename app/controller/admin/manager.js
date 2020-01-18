
const Controller = require('../../core/base_controller')
const { _CODE } = require('../../statusCode')
const gravatar = require('gravatar')
const modelName = 'Manager'
const { createRule, updateRule, loginRule } = require('../../validate/managerRule')

class ManagerController extends Controller {

    async index() {
        /**
         * @desc fetch data in table list API
         * @router GET /ezshop/api/admin/manager/:pageIndex/:pageSize
         * @pamars [pageIndex, pageSize]
         * @access private
         */
        const { ctx } = this
        const pageIndex = parseInt(ctx.params.pageIndex)
        const pageSize = parseInt(ctx.params.pageSize)
        const skipNum = (pageIndex - 1) * pageSize;//跳過的數量

        try {
            /**totalItems return int */
            const totalItems = await ctx.service.db.total(modelName)
            /**items return obj */
            const items = await ctx.service.db.fetchAll(modelName, pageSize, skipNum)
            ctx.status = 200
            ctx.body = {            
                data: items,
                total: totalItems
            }            
        }catch (err) {
            this.error(err)
        }
    }
    
    async doAddOne() {
        /**
         * @desc post data API
         * @router POST /ezshop/api/admin/manager
         * @access private
         */        
        const { ctx, service } = this
        /** request pamars Validated*/
        const pass = await this.isValidated(createRule, ctx.request.body)
        if(!pass) return this.resCode(_CODE.PARMAS_INSERT_ERROR, true)
        /** escape HTML */
        ctx.request.body = await this.escape(ctx.request.body)
        /** password encrypt */
        ctx.request.body.password = await this.encrypt(ctx.request.body.password)

        try {
            /** check Email Repeat*/
            const isRepeat = await service.db.checkRepeat(modelName, 'email', ctx.request.body.email)
            /**isRepeat return boolen */
            if(isRepeat) return this.resCode(_CODE.MANAGER_EMAIL_ISEXiST, true)

            const avatar = gravatar.url(ctx.request.body.email, {s: '200', r: 'pg', d: 'mm'})
            ctx.request.body.avatar = avatar
            const res = await service.db.insert(modelName, ctx.request.body)
            /**res return boolen */
            if(res) return this.resCode(_CODE.MANAGER_ADD_SUCCESS, true)
            this.resCode(_CODE.MANAGER_ADD_ERROR)
        }catch (err) {
            this.error(err)
        }
    }

    async edit() {
        /**
         * @desc fetch one data API
         * @router GET /ezshop/api/admin/manager/:id
         * @pamars id
         * @access private
         */ 
        const { ctx } = this
        try{
            /**item return obj */
            const item = await ctx.service.db.fetchOneById(modelName, ctx.params.id)
            if(!ctx.helper.isEmpty(item)) {
                ctx.status = 200
                ctx.body = {            
                    data: item
                }
                return
            }
            ctx.helper.isEmpty(item) && this.resCode(_CODE.MANAGER_FETCH_DATA_ERROR)
        }catch (err){
            this.error(err)
        }        
    }

    async doEditOne() {
        /**
         * @desc put data API
         * @router PUT /ezshop/api/admin/manager/:id
         * @pamars id
         * @access private
         */ 
        const { ctx, service } = this
        const id = ctx.params.id
        /** request pamars Validated*/
        const pass = await this.isValidated(updateRule, ctx.request.body)
        if(!pass) return this.resCode(_CODE.PARMAS_INSERT_ERROR)
        /** escape HTML tag*/
        ctx.request.body = await this.escape(ctx.request.body)

        try { 
            /** check Email Repeat*/
            const isRepeat = await service.db.checkRepeatOutSelf(modelName, 'email', ctx.request.body.email, id)
            /**isRepeat return boolen */
            if(isRepeat) return this.resCode(_CODE.MANAGER_EMAIL_ISEXiST, true)
            /** update_date */
            const avatar = gravatar.url(ctx.request.body.email, {s: '200', r: 'pg', d: 'mm'})
            ctx.request.body.avatar = avatar

            const d = new Date()
            ctx.request.body.update_date = d.getTime()
            
            const res = await service.db.updateOneById(modelName, ctx.params.id, ctx.request.body)
            /**res return boolen */
            if(res) return this.resCode(_CODE.MANAGER_UPDATE_SUCCESS, true)
            this.resCode(_CODE.MANAGER_UPDATE_ERROR)
        }catch (err){
            this.error(err)
        }  
    }

    async deleteOne() {
        /**
         * @desc delete one data API
         * @router DELETE /ezshop/api/admin/manager/:id
         * @pamars id
         * @access private
         */ 
        const { ctx, service } = this
        try {
            //res return boolen
            const res = await service.db.deleteOneById(modelName, ctx.params.id)
            if(res) return this.resCode(_CODE.MANAGER_DELETE_SUCCESS, true)
            this.resCode(_CODE.MANAGER_DELETE_ERROR)
        }catch (err){
            this.error(err)
        }
    }

    async login() {
        /**
         * @desc maanger login API
         * @router POST /ezshop/api/admin/login
         * @access public
         */
        const { ctx, service } = this
        let obj = {}
        /** request pamars Validated*/
        const pass = await this.isValidated(loginRule, ctx.request.body)
        if(!pass) return this.resCode(_CODE.PARMAS_INSERT_ERROR)

        try {
            /** Does this user exist ? */
            const res = await service.db.fetchOneByField(modelName, 'email', ctx.request.body.email)
            if(ctx.helper.isEmpty(res)) return this.resCode(_CODE.MANAGER_NOT_EXSIT, true)
            const USER = res[0]
            /** Is Password Correct ? */
            const isMatch = await this.decrypt(ctx.request.body.password, USER.password)
            if(!isMatch) return this.resCode(_CODE.MANAGER_PASSWORD_INCORRECT, true)
            /** Create token */
            const token = await service.manager.createJwtToken(USER)
            /** Get router access 'Array' of this manager*/
            const access = await service.manager.getOwnAccess(USER)

            ctx.body = {
                resCode: _CODE.MANAGER_LOGIN_SUCCESS,
                success: true,
                id: USER._id,
                name: USER.name,
                avatar: USER.avatar,
                is_super: USER.is_super,
                role_id:USER.role_id,
                access,
                token
            }
        }catch (err){
            this.error(err)
        }
    }    
}

module.exports = ManagerController;
