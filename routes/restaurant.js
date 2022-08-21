import { Router } from "express";
import food from "../controllers/food.js";
import table from "../controllers/table.js";
import tab from "../controllers/tab.js";
import tabitem from "../controllers/tabitem.js";

const router = Router();

router.get("/", function (req, res) {
  console.log("akf;lsdfja;sdfasd");

  res.status(404).json({
    author: "Michael Godden",
    app: "Restaurant",
    ver: "1.0.0",
  });
});

router.get("/table", table.getAllTables);
router.get("/table/:id", table.getTable);

router.get("/food", food.getAllFoods);
router.get("/food/:id", food.getFood);

router.get("/tabitem", tabitem.getAllTabItems);
router.get("/tabitem/:id", tabitem.getTabItem);

router.get("/tab", tab.getAllTabs);
router.get("/tab/:id", tab.getTab);

export default router;
