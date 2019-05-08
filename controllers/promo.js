var Promo = require('../models/promo');

function Controller(){

}

Controller.prototype.getAllPromos = function(req,res){
    Promo.find(function(err, vtc){
        if (err) {
            console.log('error finding promo: ',err);
            return res.json({message: 'error getting all promocodes'});
        }
        console.log('finding promo: ',vtc);
        return res.json({ promos: vtc});
    })
}

Controller.prototype.getReduction = function(req,res){
    Promo.find(function(err, vtc){
        if (err) {
            console.log('error finding promo: ',err);
            return res.json({message: 'error finding a promocode'});
        }
        console.log('finding promo: ',vtc);
        return res.json({ promos: vtc});
    })
};

Controller.prototype.postPromocode = function(req,res){
    let promo = new Promo(req.body);
    promo.save(function(err){
        if(err){
            console.log('error creating new promocode: ',err);
            return res.json({message: 'error creating new promocode'})
        }
        return res.json({message: 'new promo!'});
    })
};

module.exports = new Controller();