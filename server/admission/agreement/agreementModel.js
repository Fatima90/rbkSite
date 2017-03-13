var mongoose = require('mongoose');

var agreementSchema = new mongoose.Schema({
	text_a : {
		type : String,
		required : true
	},
	text_e : {
		type : String,
		required : true
	},
	option: {
		type :[{ text: String, istrue: false }]
	}	
});

var agreement = mongoose.model('agreement', bookSchema);

module.exports = agreement; 
    