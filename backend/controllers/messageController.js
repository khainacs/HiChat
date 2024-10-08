import Message from '../models/messageModel.js';
import Conversation from '../models/conversationModel.js';

// Send a message

export const sendMessage = async (req, res) => {
  const { conversationId, senderId, content } = req.body; // Đổi 'text' thành 'content'

  try {
      // Tạo tin nhắn mới
      const message = await Message.create({
          conversationId,
          senderId,
          content, // Thay đổi ở đây
      });

      return res.status(200).json(message); // Trả về tin nhắn đã được gửi
  } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send message" }); // Trả về lỗi
  }
};

// Get messages from a conversation
export const getMessages = async (req, res) => {
  const { conversationId } = req.params;

  try {
    const messages = await Message.findAll({ where: { conversation_id: conversationId } });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
