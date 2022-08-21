import model from "../models/models.js";

const tabitem = {
  model: model.TabItem,

  createTab: function (req, res) {
    if (!req.body) {
      res.status(400).json("Post HTTP Data not provided");
    }
    const { tabitem, food, cents } = req.body;
    const TabItem = tab.model;
    const Create = new TabItem({
      tabitem,
      food,
      cents,
    });

    Create.save()
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          message: `Error while creating TabItem ${err}`,
        });
      });
  },

  getTabItem: function (req, res) {
    const TabItem = tabitem.model;
    TabItem.find({ _id: req.params.id })
      .then((tabitem) => {
        if (tabitem) {
          res.status(200).json(tabitem);
        } else {
          res.status(201).json({});
        }
      })
      .catch((err) => {
        res.status(400).json({ message: `Error fetching a TabItem ${err}` });
      });
  },

  getAllTabItems: function (req, res) {
    const TabItem = tabitem.model;
    TabItem.find({})
      .then((tabitems) => {
        if (tabitems) {
          res.status(200).json(tabitems);
        } else {
          res.status(201).json({});
        }
      })
      .catch((err) => {
        res.status(400).json({ message: `Error fetching all TabItems ${err}` });
      });
  },
};

export default tabitem;
