module.exports = app => {
    
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    var d = new Date();

    const ManagerSchema = new Schema({
        name: {
            type: String, 
        },
        email: {
            type: String,
        },
        tel: {
            type: String
        },
        is_super: {
            type: Boolean, default: false//是否為超級管理員
        },
        role_id:{
            type: Schema.Types.ObjectId, ref: 'Role' //與Role modele關聯
        },
        brand_id: {
            type: [String], ref: 'Brand' //與Brand modele關聯, 可管理的品牌
        },
        password: {
            type: String,    
        },
        avatar: {
            type: String
        },
        memOnly:{
            type: Boolean, default: false//是否為付費會員
        },
        memOnlyStart:{
            type: Number//付費起始時間
        },
        memOnlyEnd:{
            type: Number//付費結束時間
        },
        create_date: {
            type: Number, default: d.getTime()
        },
        update_date: {
            type: Number
        }, 
    });
    
    return mongoose.model('Manager', ManagerSchema);
}