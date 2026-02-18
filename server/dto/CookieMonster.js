const Model = require("../models/cookieMonster");

module.exports = class CookieMonster {
  async getCookieMonster(id) {
    try {
      const data = await Model.findById(id);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getCookieMonsters() {
    try {
      const data = await Model.find();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createCookieMonster(body) {
    try {
      const object = new Model({
        name: body.name,
        color: body.color,
        cookies: body.cookies,
        height: body.height,
      });
      const data = await object.save();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateCookieMonster(id, body) {
    try {
      const object = {
        name: body.name,
        color: body.color,
        cookies: body.cookies,
        height: body.height,
      };
      const data = await Model.findByIdAndUpdate(id, object);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteCookieMonster(id) {
    try {
        const data = await Model.findByIdAndDelete(id);
        if (data) return data;
        return null;
      } catch (error) {
        console.log(error);
        return null;
      }
  }
};
