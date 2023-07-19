const express = require('express');
const app = express();  

const dotenv = require('dotenv');
dotenv.config('');    // To load .env file

const mongoose = require('mongoose');  // create instance for a database
mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('Database connected'))
    .catch((e)=>console.log(e))

app.use(express.json());
const authRoute = require('./routes/auth');    
app.use('/api/',authRoute);
const userRoute = require('./routes/user');     
app.use('/api/users',userRoute);
const jobRoute = require('./routes/job');
app.use('/api/jobs',jobRoute);
const bookmarkRoute = require('./routes/bookmark');
app.use('/api/bookmarks',bookmarkRoute);
// app.get('/', (req, res) => res.send('Hello Mounir!'))


app.listen(process.env.PORT || 5002, () => console.log(`Example app listening on port ${process.env.PORT}!`))