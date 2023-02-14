const router = require("express").Router();
const { User, AnimalReview, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const animalData = await AnimalReview.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    console.log(animalData);
    //serialize data
    const animals = animalData.map((animal) => animal.get({ plain: true }));
    console.log(animals);

    res.render("homepage", {
      animals,
      image: "/assets/mascot.png",
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for specific animal review page

router.get("/animalreview/:id", withAuth, async (req, res) => {
  try {
    console.log(req.params.id);
    const animalData = await AnimalReview.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    console.log(animalData);
    const animal = animalData.get({ plain: true });

    res.render("animalreview", { ...animal, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route for user profile page

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: AnimalReview }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render("dashboard", { ...user, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
