import { Router } from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to log in a user
router.post('/login', loginUser);

// Route to get the logged-in user's profile
router.get('/profile', authMiddleware, getUserProfile);

export default router;