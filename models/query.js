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
    console.log('restrictions retrieved: ',restrictions)
    //restrictions = { $or: [ { age: 40 }, { age: {$gt:15,$lt:30} } ], meteo: { is: 'clear', temp: { $gt: 15 } }};
    //restrictions = {name:'WeatherCode3', $or:[{age:40},{age:{$lt:35,$gt:15}}],"meteo.is": 'clear',"meteo.temp": {$gt:15}};
    return mongoose.model('Query').findOne(restrictions).then(x=>{
        mongoose.set('debug',false);
        console.log('x: ',x);
        if(!x) return Promise.resolve({accepted:false});
        return Promise.resolve({accepted: true});
    });
};

module.exports = mongoose.model('Query', querySchema);