import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js'

const conversation = sequelize.define('Conversation',{
    id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    member:{
        type: DataTypes.JSON,
        allowNull: true,
    },

},{
    timestamps: true,
})

export default conversation;