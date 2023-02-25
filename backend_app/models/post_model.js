const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
  }, {timeseries: true});

module.exports = mongoose.model('Post', postSchema)