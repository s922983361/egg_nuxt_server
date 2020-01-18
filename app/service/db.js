'use strict'
const Service = require('egg').Service

class DbService extends Service {    

    async fetchAll (modelName, pageSize, skipNum) {
        const { ctx, logger, service } = this
        const queryOptions = {}
        // mogoose populate DATA https://blog.csdn.net/elliott_yoho/article/details/53537147    
        if(modelName === 'Manager') { queryOptions.populate = 'role_id' }
        //if(ctx.state.Model.modelName === 'GoodsTypeAttr') { queryOptions.populate = 'goodsType_id' }
        try {            
            const res = await ctx.model[modelName].find().skip(skipNum).setOptions(queryOptions).limit(pageSize)
            return res
        }catch (err) {
            console.log(err)
            //logger.error(err)
        }        
    }

    async fetchOneById (modelName, id) {
        try {
            const res = await this.ctx.model[modelName].findById(id)            
            return res 
        }catch (err){
            console.log(err)
        }
    }

    async fetchOneByField (modelName, field, value) {
        try {
            const res = await this.ctx.model[modelName].find({[field] : value})
            return res
        }catch (err){
            console.log(err)
        }
    }

    async checkRepeat (modelName, field, value) {
        try {
            const res = await this.ctx.model[modelName].find({ [field] : value })            
            if(!this.ctx.helper.isEmpty(res)) return true
            return false
        }catch (err){
            console.log(err)
        }
    }

    async checkRepeatOutSelf (modelName, field, value, id) {
        try {
            const res = await this.ctx.model[modelName].find({
                [field]:value, _id:{ $ne: id }
            })            
            if(!this.ctx.helper.isEmpty(res)) return true
            return false
        }catch (err){
            console.log(err)
        }
    }

    async updateOneById (modelName, id, dataObj) {
        try {
            const res = await this.ctx.model[modelName].findByIdAndUpdate(id, dataObj, { runValidators: true })
            if(!this.ctx.helper.isEmpty(res)) return true
            return false
        }catch (err){
            console.log(err)
        }
    }

    async deleteOneById (modelName, id) {
        try {
            const res = await this.ctx.model[modelName].findByIdAndDelete(id) 
            
            if(!this.ctx.helper.isEmpty(res)) return true
            return false
        }catch (err){
            console.log(err)
        }
    }

    async deleteManyByField(modelName, field, value) {        
        try {
            const res = await this.ctx.model[modelName].deleteMany({[field]: value})
            
            if(!this.ctx.helper.isEmpty(res)) return true
            return false
        }catch (err){
            console.log(err)
        }
    }

    async insert (modelName, dataObj) {
        try {
            const res = await this.ctx.model[modelName].create(dataObj)
            
            if(!this.ctx.helper.isEmpty(res)) return true            
            return false
        }catch (err){
            console.log(err)
        }        
    }

    async total (modelName) {
        try {
            const res = await this.ctx.model[modelName].estimatedDocumentCount()//計算該集合內總數量
            return res
        }catch (err){
            console.log(err)
        }
    }
}

module.exports = DbService