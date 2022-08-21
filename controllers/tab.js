import model from "../models/models.js";

const tab = {
  model: model.Tab,

  createTab: function (req, res) {
    if (!req.body) {
      res.status(400).json("Post HTTP Data not provided");
    }
    const { table, tabs } = req.body;
    const Tab = tab.model;
    const Create = new Tab({
      table,
      tabs,
    });

    Create.save()
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          message: `Error while creating Tab ${err}`,
        });
      });
  },

  getTab: function (req, res) {
    const Tab = tab.model;
    Tab.find({ _id: req.params.id })
      .then((tab) => {
        if (tab) {
          res.status(200).json(tab);
        } else {
          res.status(201).json({});
        }
      })
      .catch((err) => {
        res.status(400).json({ message: `Error fetching a Tab ${err}` });
      });
  },

  getAllTabs: function (req, res) {
    const Tab = tab.model;
    Tab.find({})
      .then((tabs) => {
        if (tabs) {
          res.status(200).json(tabs);
        } else {
          res.status(201).json({});
        }
      })
      .catch((err) => {
        res.status(400).json({ message: `Error fetching all Tabs ${err}` });
      });
  },
};

export default tab;
