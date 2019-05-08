let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let promoSchema = new Schema({
    name : {type: String, required:true},
    avantage: { type: Schema.Types.Mixed, required: true},
    restrictions: {type: Schema.Types.Mixed},
});

module.exports = mongoose.model('Promo', promoSchema);

