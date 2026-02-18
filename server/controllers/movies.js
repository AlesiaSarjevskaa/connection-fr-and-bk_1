const Movies = require("../dto/Movies");

exports.getAllMovies = async (req, res, next) => {
  const msg = res.locals.msg;
  const data = await new Movies().getMovies();
  if (data && data.length !== 0) {
    return res.send({
      roleMsg: msg,
      msg: "Movies found!",
      payload: data,
    });
  }
  return res.send({
    msg: "Movies not found",
  });
};
exports.getMovieById = async (req, res, next) => {
  const data = await new Movies().getMovie(req.params.id);
  if (data) {
    return res.send({
      msg: "Movie found!",
      payload: data,
    });
  }
  return res.send({
    msg: "Movie not found",
  });
};
exports.createMovie = async (req, res, next) => {
  const data = await new Movies().createMovie(req.body);
  if (data) {
    return res.send({
      msg: "Movie created!",
      payload: data,
    });
  }
  return res.send({
    msg: "Movie not created",
  });
};
exports.updateMovie = async (req, res, next) => {
  const data = await new Movies().updateMovie(req.params.id, req.body);
  if (data) {
    return res.send({
      msg: "Movie updated!",
      payload: data,
    });
  }
  return res.send({
    msg: "Movie not updated",
  });
};
exports.deleteMovie = async (req, res, next) => {
  const data = await new Movies().deleteMovie(req.params.id);
  if (data) {
    return res.send({
      msg: "Movie deleted!",
      payload: data,
    });
  }
  return res.send({
    msg: "Movie not deleted",
  });
};