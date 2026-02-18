const CookieMonsters = require("../dto/CookieMonster");

exports.getAllCookieMonsters = async (req, res, next) => {
  const data = await new CookieMonsters().getCookieMonsters();
  if (data && data.length !== 0) {
    return res.send({
      msg: "CookieMonsters found!",
      payload: data,
    });
  }
  return res.send({
    msg: "CookieMonsters not found",
  });
};
exports.getCookieMonsterById = async (req, res, next) => {
  const data = await new CookieMonsters().getCookieMonster(req.params.id);
  if (data) {
    return res.send({
      msg: "CookieMonster found!",
      payload: data,
    });
  }
  return res.send({
    msg: "CookieMonster not found",
  });
};
exports.createCookieMonster = async (req, res, next) => {
  const data = await new CookieMonsters().createCookieMonster(req.body);
  if (data) {
    return res.send({
      msg: "CookieMonster created!",
      payload: data,
    });
  }
  return res.send({
    msg: "CookieMonster not created",
  });
};
exports.updateCookieMonster = async (req, res, next) => {
  const data = await new CookieMonsters().updateCookieMonster(req.params.id, req.body);
  if (data) {
    return res.send({
      msg: "CookieMonster updated!",
      payload: data,
    });
  }
  return res.send({
    msg: "CookieMonster not updated",
  });
};
exports.deleteCookieMonster = async (req, res, next) => {
  const data = await new CookieMonsters().deleteCookieMonster(req.params.id);
  if (data) {
    return res.send({
      msg: "CookieMonster deleted!",
      payload: data,
    });
  }
  return res.send({
    msg: "CookieMonster not deleted",
  });
};
