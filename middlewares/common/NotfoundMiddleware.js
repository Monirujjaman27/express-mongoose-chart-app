const createError = require("http-errors");

// 404 not found hendler
function notFoundHandler(req, res, next) {
  next(createError(404, "Content not found"));
}

// default err handler
function errorHandler(err, req, res, next) {
  res.locals.errors =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);
  if (res.locals.html) {
    //html response
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.json(res.locals.errors);
  }
}
module.exports = {
  notFoundHandler,
  errorHandler,
};
