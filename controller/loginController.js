function getlogin(req, res, next) {
  res.render("index", {
    title: "login page",
  });
}

module.exports = { getlogin };
