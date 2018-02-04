// Requirements
var express = require('express');
var router = express.Router();
var path = require('path');
var burger = require('../models/burgers.js');

// Model

// Routes
router
	.get('/',(req,res)=>{
		res.sendFile(path.join(__dirname, "../public/test.html"));
	});
	//.post()
	//.put()
	//.delete();


// Export
module.exports = router;