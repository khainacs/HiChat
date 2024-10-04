import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./database.js"
import UserModel from './models/usermodel.js'; 
import MessageModel from './models/messageModel.js';
import ConversationModel from './models/conversationModel.js';
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use(express.static('public'));
app.use('/imgaes', express.static('images'));
app.use(express.json());
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

