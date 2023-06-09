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



router.get('/',protect,admin,getUsers);
router.post('/register',registerUser)
router.post('/logout',logoutUser);
router.post('/auth',authUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').delete(protect,admin,deleteUser).get(protect,admin,getUserById).put(protect,admin,updateUser)




export default router