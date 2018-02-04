// Requires
var connection = require('../config/connection.js');

// ORM
var orm = {

	selectAll: function(callback){
		console.log('Selecting All');
		var query = 'SELECT * FROM burgers;';
		connection.query(query,(err,result)=>{
			if (err) throw err;
			callback(result);
		});
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