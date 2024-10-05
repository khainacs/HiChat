import { Sequelize } from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    'hichat',
    'root',
    '',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );

export default sequelize;