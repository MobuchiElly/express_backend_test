const express = require("express");
const Products = require("./data");

const app = express();

app.get("/api/products/v1", (req, res) => {
  try {
    res.status(200).json(Products);
  } catch (err) {
    res.status(404).json({'success':false, 'msg':err});
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
