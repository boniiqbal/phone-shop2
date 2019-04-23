const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("5cbebfa50de78f1b4992aec9")
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect("mongodb://boni:123456abc@ds239936.mlab.com:39936/phone-store")
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: "Boni iqbal",
          email: "12345",
          cart: {
            items: []
          }
        })
        user.save();
      }
    });
    app
      .listen(3000)
      .then(console.log("App running"))
      .catch(err => console.log(err));
  });
