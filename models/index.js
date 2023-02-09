//import models
const User = require('./User');
const Comment = require('./Comment');
const AnimalReview = require('./AnimalReview');


//associations

User.hasMany(AnimalReview)

User.hasMany(Comment)

AnimalReview.belongsTo(User)

AnimalReview.hasMany(Comment)

Comment.belongsTo(User)

Comment.belongsTo(AnimalReview)


