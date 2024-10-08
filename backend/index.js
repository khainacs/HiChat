import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './database.js';
import UserModel from './models/userModel.js'; 
import MessageModel from './models/messageModel.js';
import ConversationModel from './models/conversationModel.js';
import router from './routes/routes.js';  // Import the routes

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json()); // To parse JSON bodies
// Use routes from router
app.use('/api', router);  // Routes will be under `/api` path
// Database connection and server setup
const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    console.log('Kết nối đến cơ sở dữ liệu thành công.');
    app.listen(PORT, () => {
      console.log(`Listening at Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Kết nối thất bại:', error);
  });
