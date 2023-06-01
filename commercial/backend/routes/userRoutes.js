import express from 'express';
 const router = express.Router();
 import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    updateUser,
    deleteUser,
    getUserById,
    getUsers

  } from '../controllers/userController.js';




router.route('/').post(registerUser).get(getUsers);
router.post('/logout',logoutUser);
router.post('/login',authUser)
router.route('/profile').get(getUserProfile).put(updateUser)
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser)



export default router