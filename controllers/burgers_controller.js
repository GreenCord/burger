// Requirements
var express = require('express');
var router = express.Router();
var path = require('path');
var burger = require('../models/burgers.js');

// Model

// Routes
router
	.get('/',(req,res)=>{
		// res.sendFile(path.join(__dirname, "../public/test.html"));
		burger.all(function(data){
			var hbsObject = {
				burgers: data
			};
			console.log(hbsObject);
			res.render('index', hbsObject);
		});
	})
	.post('/order/new',(req,res)=>{
		var order = req.body;
		burger.insert(order.burgerOrder,(result)=>{
			res.json({ id: result.insertId });
		});
	});
	//.put()
	//.delete();


// Export
module.exports = router;