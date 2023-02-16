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

AnimalReview.hasMany(Comment, { 
  foreignKey: 'review_id',
});

Comment.belongsTo(User, { 
  foreignKey: 'user_id',
});



module.exports = { User, AnimalReview, Comment };
