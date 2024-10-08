import express from 'express';
import { createUser } from '../controllers/userController.js';
import { createConversation, getConversations } from '../controllers/conversationController.js';
import { sendMessage, getMessages } from '../controllers/messageController.js';
import { loginUser } from '../controllers/userController.js';
const router = express.Router();
import { authenticate } from '../middlewares/authMiddleware.js';
import { getCurrentUser } from '../controllers/userController.js';
// User Routes
router.post('/users/signup', createUser);   
router.post('/users/login', loginUser);     
router.get('/users/me', getCurrentUser); // Add this line to authenticate and get user info
// Conversation Routes
router.post('/conversations', createConversation);
router.get('/conversations', getConversations);

// Message Routes
router.post('/messages', sendMessage); // Gửi tin nhắn
router.get('/messages/:conversationId', getMessages); // Nhận tin nhắn theo cuộc hội thoại

export default router;
