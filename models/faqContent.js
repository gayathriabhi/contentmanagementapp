const mongoose = require("mongoose")

const FAQContentSchema = new mongoose.Schema({
    questionTitle: String,
    questionAnswer: String
})

const FAQContent = mongoose.model('FAQContent', FAQContentSchema);
module.exports = FAQContent;
