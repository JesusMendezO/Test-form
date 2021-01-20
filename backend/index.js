const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');


// create Server
const app = express();

//conect DB
connectDB();

app.use( express.json({extend: true }));


app.use(cors());

// Port app
const port = process.env.PORT || 4000;


 // app routes
app.use('/api/form', require('./routes/form'));


// start app
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running ${port}`);
})