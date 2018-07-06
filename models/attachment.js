var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Attachment = new Schema({
  "url":{
  	type: String,
  	required: true
  }
});


module.exports = mongoose.model('attachment', Attachment);