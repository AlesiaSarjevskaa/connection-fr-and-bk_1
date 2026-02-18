const Model = require("../models/cars");

module.exports = class Cars {
  async getCar(id) {
    try {
      const data = await Model.findById(id);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getCars() {
    try {
      const data = await Model.find();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createCar(body) {
    try {
      const object = new Model({
        model: body.model,
        year: body.year,
        color: body.color
      });
      const data = await object.save();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateCar(id, body) {
    try {
      const object = {
        model: body.model,
        year: body.year,
        color: body.color
      };
      const data = await Model.findByIdAndUpdate(id, object);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteCar(id) {
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
