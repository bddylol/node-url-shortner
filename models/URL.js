const mongoose = require('mongoose');

const __ = new mongoose.Schema({
  redirectid: String,
  redirect: String
});

module.exports = mongoose.model('URL', __)