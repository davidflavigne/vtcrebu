let Promo = require('../models/promo');
let express = require('express');
let router = express.Router();
let Controller = require('../controllers/promo');
router.route('/promos').get((req,res)=>Controller.getAllPromos(req,res));
router.route('/reduction').get((req,res)=>Controller.getReduction(req,res));
router.route('/promocode').post((req,res)=>Controller.postPromocode(req,res));

module.exports = router;