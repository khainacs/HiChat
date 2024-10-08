import sequelize from '../database.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Tạo UUID tự động
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Đảm bảo email là duy nhất
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true, // Có thể là null nếu không có hình ảnh
    },
}, {
    timestamps: true,
    createdAt: 'createdAt', // Tùy chỉnh tên trường
    updatedAt: 'updatedAt', // Tùy chỉnh tên trường
});

export default User;
