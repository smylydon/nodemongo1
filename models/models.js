import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodModel = new Schema({
  food: { type: Number },
  name: { type: String },
  image_url: { type: String },
  cents: {
    type: Number,
    default: 0,
  },
});

const tableModel = new Schema({
  table: { type: Number },
  tab: { type: Schema.Types.ObjectId },
});

const tabModel = new Schema({
  tab: { type: Number },
  tabitems: [{ type: Schema.Types.ObjectId, require: true }],
});

const tabItemModel = new Schema({
  tabitem: { type: Number },
  food: { type: Schema.Types.ObjectId },
});

export const Table = mongoose.model("Table", tableModel);
export const Tab = mongoose.model("Tab", tabModel);
export const Food = mongoose.model("Food", foodModel);
export const TabItem = mongoose.model("TabItem", tabItemModel);

export default {
  Table,
  Tab,
  Food,
  TabItem,
};
