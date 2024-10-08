// config/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize('hichat', 'root', '28122003', {
  host: 'localhost',
  dialect: 'mysql',
});

// Kiểm tra kết nối
try {
  await sequelize.authenticate();
  console.log('Kết nối đến cơ sở dữ liệu đã được thiết lập thành công.');
} catch (error) {
  console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
}

export default sequelize;
