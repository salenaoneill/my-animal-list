const sequelize = require('../config/connection');
const User  = require('../models/user');
const AnimalReview = require('../models/animalreview');

const userData = require('./userData.json');
const animalReviewData = require('./animalReviewData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: false });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const review of animalReviewData) {
      await AnimalReview.create({
        ...review,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };

  seedDatabase();