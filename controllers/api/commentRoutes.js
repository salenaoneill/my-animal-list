//dependencies
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//render comments
router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a comment
router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      contents: req.body.contents,
      review_id: req.body.review_id,
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});
