var express = require("express");
var router = express.Router();

function blockSundays(req, res, next) {
  const dayOfWeek = new Date();
  const date = dayOfWeek.getDay();
  const hours = dayOfWeek.getHours();
  //
  if (date <= 1 || (date > 6 && hours <= 9) || hours >= 17) {
    res.status(403);
    res.render("error", {
      errorStatus: "403 |",
      message:
        "only available during working hours (Monday to Friday, from 9 to 17)",
    });
  }
  next();
}
router.use(blockSundays);
/* GET home page. */
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/services", function (req, res) {
  res.render("services");
});

router.get("/contact", function (req, res) {
  res.render("contact");
});

module.exports = router;
