var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/checkBox", function (req, res, next) {
  try {
    console.log(req.body.selectedValue, req.body.status);
    res.status(200).json({ msg: req.body.selectedValue });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

router.post("/radio", function (req, res, next) {
  try {
    console.log(req.body.selectedValue, req.body.status);
    res.status(200).json({ msg: req.body.selectedValue });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

module.exports = router;
