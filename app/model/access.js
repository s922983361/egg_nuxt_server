module.exports = app => {
    
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    var d = new Date();

    const AccessSchema = new Schema({
        module_name: {  //模組名稱
            type: String 
        },
        icon: { //模組icon
            type: String 
        },      
        action_name: { //操作名稱
            type: String 
        },      
        type: {  // 1、模組   2、菜單     3、操作
            type: Number 
        },   
        url: { 
            type: String 
        },
        module_id: {  //此 module_id 和當前模型_id 關聯  module_id= 0 表示模組名稱
            type: Schema.Types.Mixed,  //混和類型
            default:'0',
            ref: 'Access' //與Access modele關聯(自關聯)
        },
        sort: {
            type: Number,
            default: 100
        },
        description: { 
            type: String 
        },
        status: {
            type: Number,
            default: 1
        },
        create_date: {
            type: Number, default: d.getTime()
        },
        update_date: {
            type: Number
        }, 
    });
    
    return mongoose.model('Access', AccessSchema);
}