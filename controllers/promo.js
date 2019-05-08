var Promo = require('../models/promo');

function Controller(){

}
//retrieve all available promocodes
Controller.prototype.getAllPromos = function(req,res){
    Promo.getAll().then(x=>{
        return res.json(x);
    });
}

//authorize a client to get a promocode according to restrictions
Controller.prototype.getReduction = function(req,res){
    let params = req.body;
    if(!params.promocode_name) return res.json({error: 'missing name in request'});
    Promo.findReduction(params.promocode_name).then(result=>{
        if(result.error) return res.json(result);
        if(!result.restrictions) return res.json({promocode_name: result.name, status:'accepted', avantage:result.avantage});
        if(result.restrictions && !params.arguments) return res.json({error: 'missing arguments in request'});
        return res.json(result);
    });
};

//create a new promocode
Controller.prototype.postPromocode = function(req,res){
    let promo = new Promo(req.body);
    promo.save(function(err){
        if(err){
            console.log('error creating new promocode: ',err);
            return res.json({message: 'error creating new promocode'})
        }
        return res.json({message: 'new promocode saved!'});
    })
};

module.exports = new Controller();