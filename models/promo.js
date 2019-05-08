let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let promoSchema = new Schema({
    name : String,
    avantage: { type: Schema.Types.Mixed},
    restrictions: {type: Schema.Types.Mixed},
});

module.exports = mongoose.model('Promo', promoSchema);

