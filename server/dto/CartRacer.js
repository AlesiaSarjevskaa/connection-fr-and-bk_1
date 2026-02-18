const Model = require("../models/cartRacer");

module.exports = class CartRacer {
  async getCartRacer(id) {
    try {
      const data = await Model.findById(id);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getCartRacers() {
    try {
      const data = await Model.find();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createCartRacer(body) {
    try {
      const object = new Model({
        nickname: body.nickname,
        fastest_lap: body.fastest_lap,
        time: body.time,
        won: body.won,
      });
      const data = await object.save();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateCartRacer(id, body) {
    try {
      const object = {
        nickname: body.nickname,
        fastest_lap: body.fastest_lap,
        time: body.time,
        won: body.won,
      };
      const data = await Model.findByIdAndUpdate(id, object);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteCartRacer(id) {
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
