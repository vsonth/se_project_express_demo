const express = require('express');
const mongoose = require('mongoose')
const { PORT = 3001 } = process.env;
const app = express();


mongoose.connect('mongodb://localhost:27017/wtwr_db',(r) => {
    console.log('connected to DB')}, e => console.log("DB error",e));

const routes = require('./routes')
app.use(express.json())
app.use(routes)


app.listen(PORT, () => {
    // if everything works fine, the console will show which port the application is listening to
    console.log(`App listening at port ${PORT}`);
    console.log("This is working")
  })