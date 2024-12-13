const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);                   

app.get("/", (req, res) => {
  res.send("hello from node API Server");
});

//update a product

mongoose
  .connect(
    "mongodb+srv://alperentorun334:Alperen-123@backenddatabase.kwhrs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDataBase"
  )

  .then(() => {
    console.log("Connected to database!");

    app.listen(3000, () => {
      console.log(`3000 portu dinleniyor`);
    });
  })
  .catch((err) => {
    console.log("bağlı değil", err);
  });
