const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        userId: {
            type: DataTypes.INTEGER
        },

        content: {
            type: DataTypes.STRING
        }
    },

    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        modelName: 'post'
    }

)

module.exports = Post;