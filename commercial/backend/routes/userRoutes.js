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
import { admin,protect } from '../middleware/authMiddleware.js';



router.route('/').post(registerUser).get(protect,admin,getUsers);
router.post('/logout',logoutUser);
router.post('/login',authUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUser)
router.route('/:id').delete(deleteUser).get(getUserById).put(protect,updateUser)



export default router