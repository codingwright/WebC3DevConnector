const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

//Body parser middleware
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// Connect to DB
mongoose.connect(db).then(() => console.log('MongoDb Connected')).catch(err => console.log(err));

//First route!
app.get('/', (req, res) => res.send('Hello!'));

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);


const port = process.env.PORT || 5200;
app.listen(port, () => console.log(`Server running on port ${port} `));

