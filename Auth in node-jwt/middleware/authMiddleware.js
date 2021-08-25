const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, nexxt) => {
  const token = req.cookies.jwt;

  //check json web token exists & is verified

  if (token) {
    jwt.verify(token, "net ninja secret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodedToken);
        nexxt();
      }
    });
  } else {
    res.redirect("/login");
  }
};

//Cjeck user
const chechkUser = (req, res, next) => {
  if (token) {
    jwt.verify(token, "net ninja secret", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, chechkUser };
