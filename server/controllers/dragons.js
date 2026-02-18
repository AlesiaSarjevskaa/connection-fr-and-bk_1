const Dragons = require("../dto/Dragons");

exports.getAllDragons = async (req, res, next) => {
  const msg = res.locals.msg;
  const data = await new Dragons().getDragons();
  if (data && data.length !== 0) {
    return res.send({
      roleMsg: msg,
      msg: "Dragons found!",
      payload: data,
    });
  }
  return res.send({
    msg: "Dragons not found",
  });
};
exports.getDragonById = async (req, res, next) => {
  const data = await new Dragons().getDragon(req.params.id);
  if (data) {
    return res.send({
      msg: "Dragon found!",
      payload: data,
    });
  }
  return res.send({
    msg: "Dragon not found",
  });
};
exports.createDragon = async (req, res, next) => {
  const data = await new Dragons().createDragon(req.body);
  if (data) {
    return res.send({
      msg: "Dragon created!",
      payload: data,
    });
  }
  return res.send({
    msg: "Dragon not created",
  });
};
exports.updateDragon = async (req, res, next) => {
  const data = await new Dragons().updateDragon(req.params.id, req.body);
  if (data) {
    return res.send({
      msg: "Dragon updated!",
      payload: data,
    });
  }
  return res.send({
    msg: "Dragon not updated",
  });
};
exports.deleteDragon = async (req, res, next) => {
  const data = await new Dragons().deleteDragon(req.params.id);
  if (data) {
    return res.send({
      msg: "Dragon deleted!",
      payload: data,
    });
  }
  return res.send({
    msg: "Dragon not deleted",
  });
};
