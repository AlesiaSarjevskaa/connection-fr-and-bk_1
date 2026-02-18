const mongoose = require("mongoose");

const schema = mongoose.Schema({
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
});

module.exports = mongoose.model("Cars", schema);