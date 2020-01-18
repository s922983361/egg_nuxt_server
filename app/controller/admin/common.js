const Controller = require('../../core/base_controller')
const { _CODE } = require('../../statusCode')

class CommonController extends Controller {

    async getList() {        
        /**
         * @desc fetch data for select List by modelName API 
         * @router GET /ezshop/api/admin/common/:modelName
         * @pamars modelName
         * @access private
         */
        const { ctx } = this;
        const modelName = ctx.params.modelName
        let queryOptions = {}
        
        if(modelName === 'Access'){ queryOptions.module_id = "0" }
        // if(modelName === 'GoodsCate'){ queryOptions.pid = "0" }
        
        try {            
            /**items return obj */
            const items = await ctx.model[modelName].find(queryOptions)
            ctx.status = 200
            ctx.body = {            
                data: items
            }            
        }catch (err) {
            this.error(err)
        }     
    }
    async getData() {        
        /**
         * @desc fetch data by modelName API 
         * @router GET /ezshop/api/admin/common/:modelName
         * @pamars modelName
         * @access private
         */
        const { ctx } = this;
        const modelName = ctx.params.modelName
        let queryOptions = {}
        
        //if(modelName === 'Access'){ queryOptions.module_id = "0" }
        // if(modelName === 'GoodsCate'){ queryOptions.pid = "0" }
        
        try {            
            /**items return obj */
            const items = await ctx.model[modelName].find(queryOptions)
            ctx.status = 200
            ctx.body = {            
                data: items
            }            
        }catch (err) {
            this.error(err)
        }     
    }

    async saveData() {        
        /**
         * @desc save data by modelName API
         * @router POST /ezshop/api/admin/common/:modelName
         * @pamars modelName
         * @access private
         */
        const { ctx, service } = this;
        const modelName = ctx.params.modelName 

        try {
            if(modelName === 'RoleAccess') {
                await service.db.deleteManyByField('RoleAccess', "role_id", ctx.request.body.role_id)
            }

            const res = await service.db.insert(modelName, ctx.request.body)
            /**res return boolen */
            if(res) return this.resCode(_CODE.COMMON_ADD_SUCCESS, true)
            this.resCode(_CODE.COMMON_ADD_ERROR)
        }catch (err) {
            this.error(err)
        }     
    }

    async updateData() {
        /**
         * @desc update  data by modelName API
         * @router PUT /ezshop/api/admin/common/:modelName/:id
         * @pamars [modelName, id]
         * @access private
         */
        const { ctx, service } = this;
        const modelName = ctx.params.modelName
        const id = ctx.params.id
        let queryOptions = {}
        
        try {
            const res = await service.db.updateOneById(modelName, id, ctx.request.body)
            /**res return boolen */
            if(res) return this.resCode(_CODE.COMMON_UPDATE_SUCCESS, true)
            this.resCode(_CODE.COMMON_UPDATE_ERROR)
        }catch (err) {
            this.error(err)
        }        
    }

    async deleteData() {
        /**
         * @desc delete one data by modelName API
         * @router DELETE /ezshop/api/admin/common/:modelName/:id
         * @pamars [modelName, id]
         * @access private
         */ 
        const { ctx, service } = this
        const modelName = ctx.params.modelName
        const id = ctx.params.id
        try {
            //res return boolen
            const res = await service.db.deleteOneById(modelName, id)
            if(res) return this.resCode(_CODE.COMMON_DELETE_SUCCESS, true)
            this.resCode(_CODE.COMMON_DELETE_ERROR)
        }catch (err) {
            this.error(err)
        }        
    }
}

module.exports = CommonController;