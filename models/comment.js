const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false

        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        review_id: { //what review is it attached to
            type: DataTypes.INTEGER,
            refernces: {
                model: 'animalreview',
                key: 'id',
            },

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
);


module.exports = Comment;