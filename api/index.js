require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.set('debug', true);
// connect to database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = Promise;

app.use(cors({ origin: '*' }));

const postRoutes = require('./routes/posts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.send("Hello from the root route");
})

app.use('/api/posts', postRoutes);

app.listen(3000, function () {
    console.log("~ Staring the server ~");
})