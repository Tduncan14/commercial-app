import asynceHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js';
// import jwt from 'jsonwebtoken'
import generateToken from '../utils/generateToken.js';


// auth user and get token

// route api/users/login
//post
//access public

const authUser = asynceHandler(async(req,res) => {

    const {email,password} = req.body

    // checking for the user
    const user = await User.findOne({email:email})
//  a way to compare passwords
    if(user && (await user.matchPassword(password))){

        generateToken(res, user._id)
        // adding the jsonwebtoken
        //header
        //data
        //signature

        const token = jwt.sign({
            userId:user._id
        },process.env.JWT_SECRET,{
            expiresIn:'30d'

        })

        // set jwt as http-only cookie
        res.cookie('jwt',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV !=='development',
            sameSite:'strict',
            maxAge:30*24*24*60*60 * 1000 // 30 days
        })


        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })

    }

    else{
        res.status(401);
        throw new Error('Invalid email or password');
    }

})


// register User
// post api
//public


const registerUser = asynceHandler(async(req,res) => {

    const {name,email,password} = req.body

      const userExist = await User.findOne({email})


      if(userExist){
        res.status(400)
        throw new Error('User already exist')
      }


      const user = await User.create({
        name,
        email,
        password
      })


      // check for the user



      if(user){

        generateToken(res, user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin 

        })
      }

  
})


// logout user /cearcooki
//user/logot
//private


const logoutUser = asynceHandler(async(req,res)=> {
     res.cookie('jwt','', {
        httpOnly:true,
        expires:new Date(0)
     })

     res.status(200).json({message:'Logged Out Successfully'})

})


const getUserProfile = asynceHandler(async(req,res) => {

  res.send('user profile')
})


// update user profile
// put/
//private 1p
//admin

const updateUserProfile = asynceHandler(async(req,res) => {
    res.send('get users')
}) 


// delete user
//   /api/users/:id
//private


const deleteUser = (asynceHandler(async(req,res) => {



    res.send('delete user')
}))


// get a single user
//api/users/:id
//get  getting a single user


const getUser = asynceHandler(async(req,routes) => {

    res.send('get a single user')
})



// const get multiple users
// admin only to get all users


const getUsers = asynceHandler(async(req,res) => {

    res.send('getting all the users')
})




//  admin updates the user
// Put/api/users/:id
//access Private/Admin


const updateUser = asynceHandler(async(req,res) => {

    res.send('update user')
})


//  get user by id
// get api/users/:id
// public


const getUserById = asynceHandler(async(req,res) => {

    res.send('getUserById')
})

export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    updateUser,
    deleteUser,
    getUserById,
    getUsers,
    getUser
}