const router = require("express").Router();
const { User, Animalreview, Comment } = require("../models");
const withAuth = require("../utils/auth");
//Route for homepage render with login/signup options
router.get("/", async (req, res) => {
  try {
    // const animalData = await Animalreview.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["name"],
    //     },
    //   ],
    // });
    // serialize data
    //const animals = animalData.map((animal) => animal.get({ plain: true }));

    res.render("homepage", { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for specific animal review page

router.get("/animalreview/:id", withAuth, async (req, res) => {
  try {
    const animalData = await Animalreview.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const animal = animalData.get({ plain: true });

    res.render("animalreview", { ...animal, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for user profile page

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Animal_review }],
    });
    const user = userData.get({ plain: true });
    res.render("dashboard", { ...user, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
