const express = require("express");
const doenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const loginRouter = require("./router/loginRouter");
// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/NotfoundMiddleware.js");
const app = express();

doenv.config();
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connect Successfull"))
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));
//pass cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//route setup
app.use("/", loginRouter);
//error handling 404 not found error
app.use(notFoundHandler);
// // commpon err handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`lesiting to port ${process.env.APP_URL}`);
});
