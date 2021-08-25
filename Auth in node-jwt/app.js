const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const app = express();
const { requireAuth, chechkUser } = require("./middleware/authMiddleware");

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://mohsin:12345@cluster0.thk4b.mongodb.net/Remoty?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000, () => console.log("listening...")))
  .catch((err) => console.log(err));

// routes
app.get("*", chechkUser); //applied to all get request routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);

//cookies
// app.get("/set-cookies", (req, res) => {
//   // res.setHeader("Set-Cookie", "newUser=true");
//   res.cookie("newUser", false);
//   res.cookie("Employee", true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
//   res.send("you got a cookie");
// });
// app.get("/read-cookies", (req, res) => {});
