const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    //function to compare the password the user enters to the hashed password stored in the db
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: 
        {
            //hash the password the user entered before it is stored in the database
            beforeCreate: async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user'
    }
)

module.exports = User;


