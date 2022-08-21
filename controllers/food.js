import model from "../models/models.js";

const food = {
  model: model.Food,

  createFood: function (req, res) {
    if (!req.body) {
      res.status(400).json("Post HTTP Data not provided");
    }
    const { food, name, image_url, cents } = req.body;
    const Food = food.model;
    const Create = new Food({
      food,
      name,
      image_url,
      cents,
    });

    Create.save()
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          message: `Error while creating Food ${err}`,
        });
      });
  },

  getFood: function (req, res) {
    const Food = food.model;
    Food.find({ _id: req.params.id })
      .then((food) => {
        if (food) {
          res.status(200).json(food);
        } else {
          res.status(201).json({});
        }
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: `Error fetching Food ${req.params.id}` });
      });
  },

  getAllFoods: function (req, res) {
    const Food = food.model;
    Food.find({})
      .then((food) => {
        if (food) {
          res.status(200).json(food);
        } else {
          res.status(201).json({});
        }
      })
      .catch((err) => {
        res.status(400).json({ message: `Error fetching all Foodzz` });
      });
  },
};

export default food;
