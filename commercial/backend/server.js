import express from 'express';
// const express = require('express);
import products from './data.js';
import  dotenv from 'dotenv'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import e from 'express';

dotenv.config();

connectDB() //connecting the db


const app = express();




app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes)



//  where to put error middleware
app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 5000;



app.listen(port,() => {

    console.log(`listening on port ${port}`)
})






