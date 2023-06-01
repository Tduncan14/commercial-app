import asynceHandler from '../middleware/asyncHandler.js'
import User from '../models/userModel.js';



// auth user and get token

// route api/users/login
//post
//access public

const authUser = asynceHandler(async(req,res) => {

    res.send('auth user')
})


// register User
// post api
//public


const registerUser = asynceHandler(async(req,res) => {
    res.send('register')
})


// logout user /cearcooki
//user/logot
//private


const logoutUser = asynceHandler(async(req,res)=> {
    res.send('logput')

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