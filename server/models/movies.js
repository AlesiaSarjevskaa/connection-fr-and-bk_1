const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, required: true },
});

module.exports = mongoose.model("Movie", schema);