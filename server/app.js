require('dotenv').config()

const express = require('express')
const app = express();
const port = process.env.PORT || 5000 
const staticRoute = require('./routes/staticRoute')
const mongoose = require('mongoose')
const cors = require('cors')
const methodOverride = require('method-override')

mongoose.connect("mongodb://127.0.0.1/customer")
.then(console.log("Database connected"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'));
app.use(cors());
app.use('/', staticRoute)


app.listen(port, ()=>console.log(`Server started on PORT: ${port}`))