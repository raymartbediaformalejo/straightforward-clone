const express = require("express");

const app = express();
const cors = require("cors");

const productsRoutes = require("./service/product/product.routes.js");

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server is now running at http://localhost:${PORT}`)
);

app.use(cors());
app.use(express.json());

app.use("/api", productsRoutes);
