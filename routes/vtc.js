var Promo = require('../models/promo');
var express = require('express');
var router = express.Router();

router.route('/promos').get(function(req,res){
    Promo.find(function(err, vtc){
        if (err) {
            console.log('error finding promo: ',err);
            return res.json({message: 'error'});
        }
        console.log('finding promo: ',vtc);
        return res.json({ promos: vtc});
    })
});

router.route('/reduction').get(function(req,res){
    Promo.find(function(err, vtc){
        if (err) {
            console.log('error finding promo: ',err);
            return res.json({message: 'error'});
        }
        console.log('finding promo: ',vtc);
        return res.json({ promos: vtc});
    })
});

router.route('/promocode').post(function(req,res){
    let promo = new Promo(req.body);
    promo.save(function(err){
        if(err){
            console.log('error creating new promocode: ',err);
            return res.json({message: 'error'})
        }
        return res.json({message: 'new promo!'});
    })
});

module.exports = router;