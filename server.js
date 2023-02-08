// Dependencies;
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const db = mongoose.connection;
const Cards = require('./models/cards.js');
const cardsData = require('./utilities/cardData');
const cardsController = require("./controllers/cards.js");

// Environment Variables
const app = express();
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3002;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
() => console.log('MongoDB connection established:', mongoURI)
);

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: true }));// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')); // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
app.use(cors({ origin: '*' }));

// Routes

app.use('/cards', cardsController);

// Seeding the db
app.get('/seed', async (req, res) => {
	await Cards.deleteMany({});
	await Cards.insertMany(cardsData);
	res.send('done!');
});

app.get('/', (req, res)=>{
    res.send('HI!');
});

app.listen(PORT, () => {
	console.log(PORT, 'This message means nothing');
});