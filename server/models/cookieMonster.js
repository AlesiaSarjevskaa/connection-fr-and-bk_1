const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    cookies: { type: Number, required: true },
    height: { type: Number, required: true },
});

module.exports = mongoose.model("CookieMonster", schema);