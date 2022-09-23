require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const bodyParser = require("body-parser")
const cors = require('cors');


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())
app.use('/products', productRoutes)
app.use('/users', userRoutes)



app.listen(3000, () => console.log("server has started"))