import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js'

const User = sequelize.define('User',{
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    

},{
    timestamps: true,
})

export default User;