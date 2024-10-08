// models/Message.js
import { DataTypes } from 'sequelize';
import sequelize from '../database.js'; // Đảm bảo đường dẫn không có khoảng trắng


const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.UUID, // Sử dụng UUID cho id
        defaultValue: DataTypes.UUIDV4, // Tự động sinh id nếu không có
        primaryKey: true,
        allowNull: false, // Không cho phép null
    },
    conversationId: {
        type: DataTypes.STRING,
        allowNull: false, // Không cho phép null
    },
    senderId: {
        type: DataTypes.STRING,
        allowNull: false, // Không cho phép null
    },
    content: { // Chỉnh sửa từ 'text' thành 'content'
        type: DataTypes.TEXT,
        allowNull: false, // Không cho phép null
    },
}, {
    timestamps: true, // Để tự động thêm createdAt và updatedAt
});

export default Message;
