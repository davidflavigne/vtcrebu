let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let querySchema = new Schema({
    name : {type: String, required:true},
    age: { type: Schema.Types.Mixed, required: true},
    meteo : {is:String,temp:Number}
});

//authorize a query for a promocode given restrictions
querySchema.statics.authorizedQuery = function(restrictions){
    mongoose.set('debug',true);
    return mongoose.model('Query').findOne(restrictions).then(x=>{
        mongoose.set('debug',false);
        if(!x) return Promise.resolve({accepted:false});
        return Promise.resolve({accepted: true});
    });
};

module.exports = mongoose.model('Query', querySchema);