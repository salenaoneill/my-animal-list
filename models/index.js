//import models
const User = require("./User");
const Comment = require("./Comment");
const AnimalReview = require("./AnimalReview");

//associations

User.hasMany(AnimalReview, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

AnimalReview.belongsTo(User, {
  foreignKey: "user_id",
});

// User.hasMany(Comment);

// AnimalReview.hasMany(Comment);

// Comment.belongsTo(User);

// Comment.belongsTo(AnimalReview);

module.exports = { User, AnimalReview, Comment };
