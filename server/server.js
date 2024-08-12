const express = require("express");
const app = express();
const cors = require("cors");

const corsOptionsj = require("./config/corsOptions");
const productsRoutes = require("./service/product/product.routes.js");
const categoryRoutes = require("./service/category/category.routes.js");
const variationRoutes = require("./service/variation/variation.routes.js");
const sizeRoutes = require("./service/size/size.routes.js");

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server is now running at http://localhost:${PORT}`)
);

app.use(cors(corsOptionsj));
app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", categoryRoutes);
app.use("/api", variationRoutes);
app.use("/api", sizeRoutes);
