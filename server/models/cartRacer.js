const mongoose = require("mongoose");

const schema = mongoose.Schema({
    nickname: { type: String, required: true },
    fastest_lap: { type: Number, required: true },
    time: { type: Number, required: true },
    won: { type: Boolean, required: true },
});

module.exports = mongoose.model("CartRacer", schema);