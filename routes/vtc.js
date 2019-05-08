var Promo = require('../models/promo');
var express = require('express');
var router = express.Router();

router.route('/reduction').get(function(req,res){
    return res.json({});
});

router.route('/promocode').post(function(req,res){
    return res.json({});
})

module.exports = router;