const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        postId: {
            type: DataTypes.INTEGER
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
        modelName: 'comment'
    }
)

module.exports = Comment;