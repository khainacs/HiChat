import { Sequelize, DataTypes, STRING } from 'sequelize';
import sequelize from '../database.js'

const message = sequelize.define('Message',{
    id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    conversation_id:{
        type: DataTypes.STRING,
    },
    senderId:{
        type: DataTypes.STRING,
    },
    text:{
        type: STRING,
    },
},{
    timestamps: true,
})

export default message;