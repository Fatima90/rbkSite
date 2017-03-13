var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	number : {
		type : String
	},
	email: {
    	type : String,
    	required : true,
    	unique : true
	},
	password: {
    	type : String,
    	required : true,
	},
	phone: {
    	type : String
	},
	gender: {
    	type : String
	},
	linkin: {
    	type : String
	},
	facebook : {
    	type : String
	},
	slack: {
    	type : String
	},
	position: {
    	type : String
	},
	started_date: {
    	type : Date
	},
	salary: {
    	type : Number
	},
	jobDescription: {
    	type : String
	}
});

var user = mongoose.model('user', bookSchema);

module.exports = user; 
    