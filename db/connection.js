import mongoose from "mongoose";

const conn = mongoose
  .connect(process.env.ATLAS_URI)
  .then((db) => {
    console.log("Database connected");
    return db;
  })
  .catch((err) => console.error("Database error " + err));

export default conn;
