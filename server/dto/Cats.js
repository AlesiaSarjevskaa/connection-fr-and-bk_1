const Model = require("../models/cats");

module.exports = class Cats {
  async getCat(id) {
    try {
      const data = await Model.findById(id);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getCats() {
    try {
      const data = await Model.find();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createCat(body) {
    try {
      const object = new Model({
        name: body.name,
        race: body.race,
        color: body.color,
        age: body.age,
      });
      const data = await object.save();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateCat(id, body) {
    try {
      const object = {
        name: body.name,
        type: body.type,
        year: body.year,
      };
      const data = await Model.findByIdAndUpdate(id, object);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteCat(id) {
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
