const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class AnimalReview extends Model {}

AnimalReview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //image: { //data types.BLOB; otherwise simply store the pathway to the image here: perhaps they will be stored in public folder

    animal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "animalreview",
  }
);

module.exports = AnimalReview;
