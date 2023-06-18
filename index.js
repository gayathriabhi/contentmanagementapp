const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001'
}));

const FAQContent = new require('./models/faqContent');
const HelpArticle = new require('./models/helpArticle');
const connect = require('./db/mongoose')

app.post('/faqcontent', async (req, res) => {
    let connection = await connect();
    console.log('connection', connection);
    console.log('Request');
    console.dir(req, {depth: null});
    console.log('Request body');
    console.dir(req.body, {depth: null});
    const recipe = await FAQContent.create(req.body).then((content) => {
        console.log('content')
        console.dir(content, {depth: null});
        res.status(201).send(content);
    }).catch((err) =>{
        console.log('err', err);
        res.status(400).send(err);
    })
});

app.get('/faqcontent', async (req, res) => {
    let connection = await connect();
    console.log('connection', connection);
    FAQContent.find({}).then((blogs) => {
        console.log('blogs', blogs);
        res.send(blogs);
    }).catch(err => {
        res.status(500).send(err);
    })
});

app.post('/help-article', async (req, res) => {
    let connection = await connect();
    console.log('connection', connection);
    const recipe = await HelpArticle.create(req.body).then((article) => {
        console.log('content')
        console.dir(article, {depth: null});
        res.status(201).send(article);
    }).catch((err) =>{
        console.log('err', err);
        res.status(400).send(err);
    })
});

app.get('/help-article', async (req, res) => {
    let connection = await connect();
    console.log('connection', connection);
    HelpArticle.find({}).then((articles) => {
        console.log('articles', articles);
        res.send(articles);
    }).catch(err => {
        res.status(500).send(err);
    })
});

app.listen(3000, (req, res) => {
    console.log('Application is running on 3000');
});

