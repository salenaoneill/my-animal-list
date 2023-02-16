//dependencies
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//render comments
router.get("/", (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}); 

router.get('/:id', (req, res) => {
  Comment.findAll({
          where: {
              id: req.params.id
          }
      })
      .then(commentData => res.json(commentData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});


//create a comment
router.post("/", withAuth, async (req, res) => {
  if (req.session) {
    await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

module.exports = router;
