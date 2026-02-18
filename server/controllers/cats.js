const Cats = require("../dto/Cats");

exports.getAllCats = async (req, res, next) => {
  const data = await new Cats().getCats();
  if (data && data.length !== 0) {
    return res.status(200).send({
      msg: "Cats found!",
      payload: data,
    });
  }
  return res.status(500).send({
    msg: "Cats not found",
  });
};
exports.getCatById = async (req, res, next) => {
  const data = await new Cats().getCat(req.params.id);
  if (data) {
    return res.status(200).send({
      msg: "Cat found",
      payload: data,
    });
  }
  return res.status(500).send({
    msg: "Cat not found",
  });
};
exports.createCat = async (req, res, next) => {
  const data = await new Cats().createCat(req.body);
  if (data) {
    return res.status(200).send({
      msg: "Cat created!",
      payload: data,
    });
  }
  return res.status(500).send({
    msg: "Cat not created",
  });
};
exports.updateCat = async (req, res, next) => {
  const data = await new Cats().updateCat(req.params.id, req.body);
  if (data) {
    return res.send({
      msg: "Cat updated!",
      payload: data,
    });
  }
  return res.send({
    msg: "Cat not updated",
  });
};
exports.deleteCat = async (req, res, next) => {
  const data = await new Cats().deleteCat(req.params.id);
  if (data) {
    return res.send({
      msg: "Cat deleted!",
      payload: data,
    });
  }
  return res.send({
    msg: "Cat not deleted",
  });
};
