function getlogin(req, res, next) {
  res.render("main", {
    title: "login page",
  });
}

module.exports = { getlogin };
