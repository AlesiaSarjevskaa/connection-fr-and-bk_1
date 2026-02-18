const Model = require("../models/movies");

module.exports = class Movies {
  async getMovie(id) {
    try {
      const data = await Model.findById(id);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getMovies() {
    try {
      const data = await Model.find();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createMovie(body) {
    try {
      const object = new Model({
        name: body.name,
        genre: body.genre,
        year: body.year,
        rating: body.rating
      });
      const data = await object.save();
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateMovie(id, body) {
    try {
      const object = {
        name: body.name,
        genre: body.genre,
        year: body.year,
        rating: body.rating,
      };
      const data = await Model.findByIdAndUpdate(id, object);
      if (data) return data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteMovie(id) {
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
