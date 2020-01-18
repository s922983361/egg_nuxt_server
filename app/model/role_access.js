module.exports = app => {
    
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    var d = new Date();

    const RoleAccessSchema = new Schema({
        role_id: { 
            //type: Schema.Types.ObjectId 
            type: String
        },
        access_id: { 
            //type: Schema.Types.ObjectId 
            type: [String]
        }, 
    });
    
    return mongoose.model('RoleAccess', RoleAccessSchema);
}