import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Conversation = sequelize.define('Conversation', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    participants: {
        type: DataTypes.JSON, // Có thể lưu danh sách người tham gia
        allowNull: false,
    },
}, {
    timestamps: true,
});

// Xuất mô hình Conversation
export default Conversation; 
