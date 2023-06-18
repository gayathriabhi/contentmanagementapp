const mongoose = require("mongoose")

const HelpArticleSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    imageURL: String,
    paragraph: String
})

const HelpArticle = mongoose.model('HelpArticle', HelpArticleSchema);
module.exports = HelpArticle;
