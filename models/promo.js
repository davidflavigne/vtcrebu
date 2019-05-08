let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let promoSchema = new Schema({
    name : {type: String, required:true},
    avantage: { type: Schema.Types.Mixed, required: true},
    restrictions: {type: Schema.Types.Mixed},
});

promoSchema.statics.getAll = function(){
    return mongoose.model('Promo').find().then((vtc)=>{
        if (!vtc.length) {
            console.log('error finding promo: ',err);
            return Promise.resolve({error: 'error getting all promocodes'});
        }
        console.log('finding promo: ',vtc);
        let res = {promos:vtc};
        return Promise.resolve(res);
    })
};

promoSchema.statics.findReduction = function(name){
    return mongoose.model('Promo').findOne({name:name},function(err, vtc){
        if (err) {
            console.log('error finding promo: ',err);
            return Promise.resolve({error: 'error finding a promocode'});
        }
    }).then((vtc)=>{
        if(!vtc) return Promise.resolve({error:'no promocode with this name'});
        return Promise.resolve(vtc);
    })
};

module.exports = mongoose.model('Promo', promoSchema);

