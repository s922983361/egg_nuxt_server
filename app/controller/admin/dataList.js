
const Controller = require('../../core/base_controller')

class DataListController extends Controller {

    async getByModelName() {
        /**
         * @desc fetch data in table list API
         * @router GET /ezshop/api/admin/dataList/:modelName
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
    
}

module.exports = DataListController;