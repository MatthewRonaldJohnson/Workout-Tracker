const express = require('express');
const mongoose = require('mongoose')

const db = require('./models')
const routes = require('./controllers');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb:localhost/workoutDB", {useNewUrlParser: true});

app.use(routes)
app.listen(PORT, () => console.log('App Listening on Port: ' + PORT))