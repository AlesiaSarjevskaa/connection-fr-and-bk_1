const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    numberOfHeads: { type: Number, required: true },
    dead: { type: Boolean, required: true }
});

module.exports = mongoose.model("Dragons", schema);