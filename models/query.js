let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let querySchema = new Schema({
    name : {type: String, required:true},
    age: { type: Schema.Types.Mixed, required: true},
    meteo : {is:String,temp:Number}
});

querySchema.statics.authorizedQuery = function(restrictions){
    return mongoose.model('Query').findOne(restrictions).then(x=>{
        if(!x) return Promise.resolve({accepted:false});
        return Promise.resolve({accepted: true});
    });
};

module.exports = mongoose.model('Query', querySchema);