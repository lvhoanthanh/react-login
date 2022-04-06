const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let refreshTokens = []; //fake db;

const authController = {
  register: async (req, res) => {
    //lets validate the data before we a user
    const { error } = registerValidation(req.body);
    if (error) {
      console.log(error.details[0].message);
      return res.status(400).send(error.details[0].message);
    }
    // checking if user is already in the database
    const emailExist = await User.findOne({
      email: req.body.email,
    });
    if (emailExist) return res.status(400).send("Email already exists!!!");
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    try {
      const saveUser = await user.save();
      res.send({
        user: user._id,
        message: "Register successfully!",
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },
  login: async (req, res) => {
    //lets validate the data before we a user
    const { error } = loginValidation(req.body);
    if (error) {
      console.log(error.details[0].message);
      return res.status(400).send(error.details[0].message);
    }
    // checking if email exists!
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) return res.status(400).send("Email is not found!!!");
    //password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password!!!");
    // res.send('login success!!!!');
    //create and assign a token
    const token = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    refreshTokens.push(refreshToken);
    res.cookie("refreshToken", refreshToken);
    res.status(200).json({
      user,
      token,
    });
    // res.header("auth-token", token).send(token);
  },
  refresh: async (req, res) => {
    //take refresh token from user
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid");
    }
    jwt.verify(refreshToken, process.env.TOKEN_SECRET_REFRESH, (err, user) => {
      if (err) {
        console.log(err);
      }
      //create new access token, refresh token
      const newAccessToken = generateAccessToken(user);
      const newRefreshToken = generateRefreshToken(user);
      refreshTokens.filter((token) => token !== refreshToken);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", newRefreshToken);
      res.status(200).json({
        accessToken: newAccessToken,
      });
    });
  },
  logout: async (req, res) => {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    res.status(200).send("Logout Success!");
    //The JWT is stored on browser, so remove the token deleting the cookie at client side
  },
};

//generate access token
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "30s",
    }
  );
};
//generate refresh token
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      _id: user.id,
    },
    process.env.TOKEN_SECRET_REFRESH,
    {
      expiresIn: "365d",
    }
  );
};

module.exports = authController;
