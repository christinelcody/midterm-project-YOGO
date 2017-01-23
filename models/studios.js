var mongoose = require('mongoose');

var Studios = mongoose.Schema({

  name: {
    type: String,
    unique: true
  },
  zip: String,
  type: String,
  coords: [Number, Number],
});

module.exports = mongoose.model("Studio", Studios);