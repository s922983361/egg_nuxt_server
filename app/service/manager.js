'use strict'
const Service = require('egg').Service

class ManagerService extends Service { 

    async createJwtToken(USER) { 
        const { app } = this 
        const KEY = app.config.jwt.secret
        const payload = {
            id : USER.id,
            name: USER.name,
            avatar: USER.avatar
        }
        const token = `Bearer ${app.jwt.sign(payload, KEY, { expiresIn: 36000 })}`
        return token
    }

    async getOwnAccess(USER) {
        const { ctx, service } = this
        /** Use 'role_id' to Get User Access from RoleAcess collection*/
        const res = await service.db.fetchOneByField('RoleAccess', 'role_id', USER.role_id)
        const ACCESS = res[0]
        let accessArray = []
        //ACCESS.access_id is Array storeed 'id' of Access Model
        //Use Array Iterator (for.. of..), because Array.foeEach API is not an async function
        for(let id of ACCESS.access_id) {
            const result = await ctx.model.Access.find({'_id': id})
            // replce '/admin/manager/id' to '/admin/manager/45645646545611313411'
            let url = result[0].url
            //let newUrl = url.replace(/id/i, USER._id)
            accessArray.push(url)
        }
        return accessArray
    }
}

module.exports = ManagerService