const router = require("express").Router();
const User = require("../models/User");
const verify = require("./verifyToken");

router.get("/", verify, async (req, res) => {
  // const data = await User.findOne({_id: req.user});
  // res.send(data);
  // res.json({
  //   posts: {
  //   title: 'this is a posts',
  //   }
  // });
  const user = await User.findOne({ id: res.user._id });
  res.send(user);
});

module.exports = router;
