import Conversation from '../models/conversationModel.js';
import { Op } from 'sequelize';  // Import Op từ Sequelize để sử dụng cho điều kiện tìm kiếm

// Tạo cuộc hội thoại mới
export const createConversation = async (req, res) => {
  try {
    const { id, participants } = req.body;
    const newConversation = await Conversation.create({ id, participants });
    res.status(201).json(newConversation);
  } catch (error) {
    console.error('Error creating conversation:', error);  // Log thêm chi tiết lỗi
    res.status(500).json({ error: 'Failed to create conversation' });
  }
};


// Lấy danh sách cuộc hội thoại của một người dùng
export const getConversations = async (req, res) => {
  const { userId } = req.params;
  
  try {
    const conversations = await Conversation.findAll({
      where: {
        participants: {
          [Op.contains]: [userId]  // Kiểm tra nếu userId nằm trong danh sách participants
        }
      }
    });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
};
