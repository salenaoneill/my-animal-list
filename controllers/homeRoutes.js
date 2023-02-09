const router = require("express").Router();
const { User, Animal_review, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Route for homepage render with login/signup options
router.get("/", async (req, res) => {
  try {
    res.render("homepage", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for specific animal review page

router.get("/animal_review/:id", withAuth, async (req, res) => {
  try {
    const animalData = await Animal_review.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment }],
    });
    const animal = animalData.get({ plain: true });
    res.render("animal_review", { ...animal, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for user profile page

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Animal_review }],
    });
    const user = userData.get({ plain: true });
    res.render("profile", { ...user, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
