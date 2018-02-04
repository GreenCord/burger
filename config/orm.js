// Requires
var connection = require('../config/connection.js');

// ORM
var orm = {

	selectAll: function(callback){
		callback(console.log('Selecting All'));
	},
	insertOne: function(vals, callback){
		callback(console.log('Inserting One',vals));
	},
	updateOne: function(vals, callback){
		callback(console.log('Updating One',vals));
	}

};

// Export
module.exports = orm;