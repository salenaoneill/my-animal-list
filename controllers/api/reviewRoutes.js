//dependencies
const router = require("express").Router();
const { User, AnimalReview, Comment } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

//render all reviews
router.get("/", (req, res) => {
  AnimalReview.findAll({
    attributes: ["id", "image", "animal_name", "contents", "user_id"],
    include: [
      {
        model: User,
        attributes: ["name"],
      },
      {
        model: Comment,
        attributes: ["id", "contents", "user_id", "review_id"],
        include: {
          model: User,
          attributes: ["name"],
        },
      },
    ],
  })
    //render reviews
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//render reviews
router.get("/:id", (req, res) => {
  AnimalReview.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "image", "animal_name", "contents", "user_id"],
    include: [
      {
        model: User,
        attributes: ["name"],
      },
      {
        model: Comment,
        attributes: ["id", "contents", "user_id", "review_id"],
        include: {
          model: User,
          attributes: ["name"],
        },
      },
    ],
  })

    //render single review
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: "No review found with this id" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a review
router.post("/", withAuth, (req, res) => {
  if (req.session) {
    AnimalReview.create({
      image: req.body.image,
      animal_name: req.body.animal_name,
      contents: req.body.contents,
      user_id: req.session.user_id,
    })
      .then((dbReviewData) => res.json(dbReviewData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//delete a review
router.delete("/:id", withAuth, (req, res) => {
  AnimalReview.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: "No review with this id found" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a review
router.put("/:id", withAuth, (req, res) => {
  AnimalReview.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: "No review with this id found" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
