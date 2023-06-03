import jwt  from "jsonwebtoken";
// need to find the jwt
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";


// protected routes

 const protect = asyncHandler (async(req,res,next) => {

    let token;


    // read jwt from the cookie

    token = req.cookies.jwt;


    if(token){

        try{

            const decoded = jwt.verify(token,process.env.JWT_SECRET);

           req.user = await User.findById(decoded.userId).select('-password')

           next();

        }
        catch(error){
            res.status(401)
            console.log(error)
            throw new Error('Not authorized, token failed')

        }



    }
    else{
        res.status(401);
        throw new Error('Not authorized, no token')
    }




})



// creating the admin middleware

const admin = (req, res,next) => {

    if(req.user && req.user.isAdmin){
       next()
    }

    else{
        res.status(401)
        throw new Error('not autorized as admin')

    }

}


export {protect,admin}