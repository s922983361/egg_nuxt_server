const Controller = require('../../core/base_controller')
const { _CODE } = require('../../statusCode')
const modelName = 'Access'
const { createRule, updateRule } = require('../../validate/accessRule')

class AccessController extends Controller {
    
    async index() {
        /**
         * @desc fetch data in table list API
         * @router GET /ezshop/api/admin/access/:pageIndex/:pageSize
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
            /**items return array */
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
         * @router POST /ezshop/api/admin/access
         * @access private
         */        
        const { ctx, service } = this
        /** request pamars Validated*/
        const pass = await this.isValidated(createRule, ctx.request.body)
        if(!pass) return this.resCode(_CODE.PARMAS_INSERT_ERROR)
        /** escape HTML */
        ctx.request.body = await this.escape(ctx.request.body)

        try {
            const res = await service.db.insert(modelName, ctx.request.body)
            /**res return boolen */
            if(res) return this.resCode(_CODE.ACCESS_ADD_SUCCESS, true)
            this.resCode(_CODE.ACCESS_ADD_ERROR)
        }catch (err) {
            this.error(err)
        }
    }

    async edit() {
        /**
         * @desc fetch one data API
         * @router GET /ezshop/api/admin/access/:id
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
            ctx.helper.isEmpty(item) && this.resCode(_CODE.ACCESS_FETCH_DATA_ERROR)
        }catch (err){
            this.error(err)
        }        
    }

    async doEditOne() {
        /**
         * @desc put data API
         * @router PUT /ezshop/api/admin/access/:id
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
            /** update_date */
            const d = new Date()
            ctx.request.body.update_date = d.getTime()
            
            const res = await service.db.updateOneById(modelName, ctx.params.id, ctx.request.body)
            /**res return boolen */
            if(res) return this.resCode(_CODE.ACCESS_UPDATE_SUCCESS, true)
            this.resCode(_CODE.ACCESS_UPDATE_ERROR)
        }catch (err){
            this.error(err)
        }  
    }

    async deleteOne() {
        /**
         * @desc delete one data API
         * @router DELETE /ezshop/api/admin/access/:id
         * @pamars id
         * @access private
         */ 
        const { ctx, service } = this
        try {
            //res return boolen
            const res = await service.db.deleteOneById(modelName, ctx.params.id)
            if(res) return this.resCode(_CODE.ACCESS_DELETE_SUCCESS, true)
            this.resCode(_CODE.ACCESS_DELETE_ERROR)
        }catch (err){
            this.error(err)
        }
    }
}

module.exports = AccessController;