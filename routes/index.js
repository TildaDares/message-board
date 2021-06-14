var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Tilda",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});

router
  .get("/new", function (req, res, next) {
    res.render("form", { title: "New Message" });
  })
  .post("/new", function (req, res, next) {
    const { message, author } = req.body;
    messages.unshift({ text: message, user: author, added: new Date() });
    res.redirect("/");
  });

module.exports = router;
