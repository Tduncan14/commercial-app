import express from 'express';
// const express = require('express);
import products from './data.js';
import  dotenv from 'dotenv'
dotenv.config();


const app = express();



app.get('/',(req,res) => {

})


app.get('/api/products', (req,res) => {

    res.send(products)
})

app.get('/api/products/:id',(req,res) => {

    const product = products.find((p => p._id === req.params.id))


    res.send(product)
})

const port = process.env.PORT || 5000;



app.listen(port,() => {

    console.log(`listening on port ${port}`)
})






