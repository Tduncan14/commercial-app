import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from './data/products';
import users  from './data/users'
import User from './models/userModel';
import Order from './models/orderModel';
import Product from './models/productModel';
import connectDB from './config/db.js';


dotenv.config()


connectDB()


const importData = async () => {


    try{
        await Order.deleteMany();
        await Product.deleteMany ();
        await User.deleteMany();


        const createdUsers = await User.insertMany(users);

        const adminUser  = createdUsers[0]._id


        const sampleProducts = products.map((product) =>{

            return {...product, user:adminUser}
        })


        await Product.insertMany(sampleProducts);


        console.log('data Imported'.green.inverse)
        process.exit()

    }

    catch(error){

        console.error(`${err}`.red.inverse)
        process.exit(1)


    }








}



// destroy the data


const destroyData = async () => {


    try{

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()


        console.log(`Data Destroyed`.red.inverse)
        process.exit()

    }

    catch(error){


        console.error(`${error}`.red.inverse);
        process.exit(1)


    }







}



if(process.argv[2] === '-d' ) {

    destroyData();


}


else {
    importData()
}

