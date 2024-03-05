const express = require('express')
const app = express()
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route.js")

app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

mongoose.connect('mongodb+srv://ibrahimhafez24:Qr9axhjbf4pw4yVm@backenddb.jh2171g.mongodb.net/BackendDB?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch(() => {
        console.log('Connection failed')
    });


app.use('/api/products', productRoute)
