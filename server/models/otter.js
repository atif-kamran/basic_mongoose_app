var mongoose = require('mongoose');

var OtterSchema = new mongoose.Schema({
  name: String,
  age: Number
})

var Otter = mongoose.model('Otter', OtterSchema);
