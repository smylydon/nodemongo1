import model from "../models/models.js";

const table = {
  model: model.Table,

  createTable: function (req, res) {
    if (!req.body) {
      res.status(400).json("Post HTTP Data not provided");
    }
    const { table, tabs } = req.body;
    const Table = table.model;
    const Create = new Table({
      table,
      tabs,
    });

    Create.save()
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          message: `Error while creating Table ${err}`,
        });
      });
  },

  getTable: function (req, res) {
    const Table = table.model;
    Table.find({ _id: req.params.id })
      .then((table) => {
        if (table) {
          res.status(200).json(table);
        } else {
          res.status(201).json({});
        }
      })
      .catch((err) => {
        res.status(400).json({ message: `Error fetching a Table ${err}` });
      });
  },

  getAllTables: function (req, res) {
    const Table = table.model;
    Table.find({})
      .then((tables) => {
        if (tables) {
          res.status(200).json(tables);
        } else {
          res.status(201).json({});
        }
      })
      .catch((err) => {
        res.status(400).json({ message: `Error fetching all Tables ${err}` });
      });
  },
};

export default table;
